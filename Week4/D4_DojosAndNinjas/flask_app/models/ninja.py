# ------------------------IMPORT------------------------ #
from crypt import crypt
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


# ------------------------CLASS: NINJA------------------------ #
class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']

    # NINJA: CREATE
    @classmethod
    def save(cls, data):
        query = "INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id) VALUES (%(first_name)s, %(last_name)s, %(age)s, NOW(), NOW(), %(dojo_id)s);"
        # The line of code below would substitute the line of code above if we had a username and password input here on the "Dojos and Ninjas" assignment
        # query = "INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id, username, password) VALUES (%(first_name)s, %(last_name)s, %(age)s, NOW(), NOW(), %(dojo_id)s), %(username)s, %(password)s;"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # NINJA: READ (SELECT SOME NINJAS)
    @classmethod
    def get_some(cls, data):
        query = "SELECT * FROM ninjas WHERE dojo_id=%(id)s;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        ninjas = []
        for ninja in results:
            ninjas.append(cls(ninja))
        return ninjas

    # NINJA: UPDATE
    @classmethod
    def edit(cls, data):
        query = "UPDATE ninjas SET first_name=%(first_name)s, last_name=%(last_name)s, age=%(age)s WHERE users.id=%(id)s"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # NINJA: DELETE
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM ninjas WHERE id=%(id)s;"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # SEE IF NINJA EXISTS IN DB
    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM ninjas WHERE email = %(email)s;"
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        if len(result) < 1:
            return False
        return cls(result[0])

    # STATIC METHOD - VALIDATION
    @staticmethod
    def validate_ninja(ninja):
        # EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        is_valid = True
        if len(ninja['first_name']) < 3:
            flash("First Name must be at least 3 characters.")
            is_valid = False
        if len(ninja['last_name']) < 3:
            flash("Last Name must be at least 3 characters.")
            is_valid = False
        if int(float(ninja['age'])) < 5:
            flash("Age must be older than 5 years old.")
            is_valid = False
        # if not EMAIL_REGEX.match(ninja['email']): # If you also had an email input on your form, this would be your pattern validation for that
        #     flash("Invalid email address.")
        #     is_valid = False
        return is_valid