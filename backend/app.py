from flask import Flask, jsonify, Response, request
import openai
from pymongo import MongoClient
from flask_cors import CORS
from dotenv import load_dotenv
import os
app = Flask(__name__)
CORS(app)  

load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')


client = MongoClient("mongodb://localhost:27017/")
db = client["foodieDB"]
collection = db["recipes"]

@app.route("/foods", methods=["GET"])
def get_foods():

    try:
        foods = collection.find()
        result = [{
            "id": str(food["_id"]),
            "name": food["name"],
            "category": food["category"],
            "price": food["price"],
            "image_url": food["image_url"],
            "ingredients": food["ingredients"]
        } for food in foods]
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": f"An error occurred while fetching foods: {str(e)}"}), 500

@app.route('/search', methods=['GET'])
def search_food():
    name = request.args.get('name', '').lower()
    result = collection.find({"name": {"$regex": name, "$options": "i"}})
    foods = []
    for food in result:
        food_data = {
            "id": str(food["_id"]),
            "name": food["name"],
            "category": food["category"],
            "price": food["price"],
            "description": food["description"],
            "image_url": f"http://localhost:5000/static/images/{food['image_url']}",  
            "ingredients": food["ingredients"]
        }
        foods.append(food_data)
    return jsonify(foods)





if __name__ == '__main__':
    app.run(debug=True)
