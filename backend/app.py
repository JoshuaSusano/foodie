from flask import Flask, jsonify, request
from flask_cors import CORS     
from flask_pymongo import PyMongo
from config import Config
app = Flask(__name__)
app.config.from_object(Config)
CORS(app) 
mongo = PyMongo(app)

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
 

@app.route('/get-sample-recipe')
def get_sample_recipe():
    sample_data = mongo.db.recipes.find_one()
    if sample_data:
        sample_data['_id'] = str(sample_data['_id']) 
        return jsonify(sample_data)
    else:
        return jsonify({"message": "No recipes found in the database."})

if __name__ == '__main__':
    app.run(debug=True)
