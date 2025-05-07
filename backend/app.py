from flask import Flask, jsonify, request , Response
import openai
from flask_pymongo import PyMongo
from config import Config
from dotenv import load_dotenv
import os
app = Flask(__name__)
app.config.from_object(Config)
openai.api_key = os.getenv('OPENAI_API_KEY')
load_dotenv()
mongo = PyMongo(app)
@app.route('/register', methods=['POST'])
def register():
    return "User registered successfully"
@app.route("/login", methods=['POST'])
def login():
    return jsonify({
        "message" : "user logged in successfully"
    })
@app.route('/preferences', methods = ['POST'])
def preferences():
    return jsonify({
        "message" : "user preferences updated successfully"
    })
@app.route('/ingridients', methods=['GET', 'POST'])
def add_ingridient():
    if request.method == 'POST':
        data = request.get_json()
        recipe = {
            'name': data.get('name'),
            'ingredients': data.get('ingredients'), 
            'instruction': data.get('instruction')
        }
        mongo.db.recipes.insert_one(recipe)
        return jsonify({"message": "Ingridient added successfully!"}), 201
    else:
       
        recipes = list(mongo.db.recipes.find())
        for recipe in recipes:
            recipe['_id'] = str(recipe['_id'])
        return jsonify(recipes)
 

@app.route('/get-sample-recipe', methods=['GET', 'POST'])
def get_sample_recipe():
    def generate():
        # Make the API call with the new API method
        response = openai.completions.create(
            model="gpt-3.5-turbo",  # or another model
            prompt="Give me a sample recipe for a cake",
            stream=True,
        )
        for chunk in response:
            content = chunk.get('choices', [{}])[0].get('text', '')
            if content:
                yield content  # Yield each chunk as it comes in

    return Response(generate(), content_type="text/plain")



        
if __name__ == '__main__':
    app.run(debug=True)


