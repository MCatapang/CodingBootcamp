# ------------------------IMPORTS------------------------ #
from flask_app.config.mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
from flask_app import app
from crypt import crypt
from flask import flash
import re

bcrypt = Bcrypt(app)


# ------------------------CLASS: NINJA------------------------ #
class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.under_30 = data['under_30']
        self.instructions = data['instructions']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # RECIPE: VALIDATE (STATIC METHOD)
    @staticmethod
    def validate_recipe(user):
        is_valid = True
        if len(user['name']) < 3:
            flash("Recipe name must be at least 3 characters.", "recipeError")
            is_valid = False
        if len(user['description']) < 3:
            flash("Description must be at least 3 characters.", "recipeError")
            is_valid = False
        if len(user['instructions']) < 3:
            flash("Instructions must be at least 3 characters.", "recipeError")
            is_valid = False
        if not user['created_at']:
            flash("Make sure to set a date when the recipe was created.", "recipeError")
            is_valid = False
        if not user['under_30']:
            flash("Please note whether the recipe can be accomplished in under 30 minutes.", "recipeError")
            is_valid = False
        return is_valid

    # RECIPE: CREATE
    @classmethod
    def create_recipe(cls, data):
        query = "INSERT INTO recipes (name, description, instructions, created_at, under_30) VALUES (%(name)s, %(description)s, %(instructions)s, %(created_at)s, NOW());"
        return connectToMySQL('kitchen_schema').query_db(query, data)

    # RECIPE: READ
    @classmethod
    def read_recipe(cls, data):
        query = "SELECT * FROM recipes WHERE id=%(id)s;"
        results = connectToMySQL('kitchen_schema').query_db(query, data)
        return results[0]

    # RECIPE: UPDATE
    @classmethod
    def update_recipe(cls, data):
        query = "UPDATE recipes SET name=%(first_name)s, description=%(description)s, instructions=%(instructions)s, created_at=%(created_at)s, under_30=%(under_30)s WHERE recipes.id=%(id)s"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # RECIPE: DELETE
    @classmethod
    def delete_recipe(cls, data):
        query = "DELETE FROM ninjas WHERE id=%(id)s;"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)