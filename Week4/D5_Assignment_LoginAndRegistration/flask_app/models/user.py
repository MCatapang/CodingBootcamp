# ------------------------IMPORT------------------------ #
from crypt import crypt
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


# ------------------------CLASS: NINJA------------------------ #
class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email_address = data['email_address']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # USER: VALIDATE (STATIC METHOD)
    @staticmethod
    def validate_user(user):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        PASSWORD_REGEX = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])')
        is_valid = True
        if len(user['first_name']) < 3:
            flash("First Name must be at least 3 characters.", "registerError")
            is_valid = False
        if len(user['last_name']) < 3:
            flash("Last Name must be at least 3 characters.", "registerError")
            is_valid = False
        if not EMAIL_REGEX.match(user['email_address']): 
            flash("Invalid email address.", "registerError")
            is_valid = False
        if not PASSWORD_REGEX.match(user['password']):
            flash("Password must have at least 1 lowercase letter, 1 uppercase letter, 1 numeric character, and 1 special character.", "registerError")
            is_valid = False
        if not (user['password'] == user['confirm_password']):
            flash("Passwords do not match.", "registerError")
            is_valid = False
        return is_valid

    # USER: REGISTER
    @classmethod
    def create_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email_address, password, updated_at, created_at) VALUES (%(first_name)s, %(last_name)s, %(email_address)s, %(password)s, NOW(), NOW());"
        return connectToMySQL('login_and_registration').query_db(query, data)

    # USER: LOGIN
    @classmethod
    def check_if_in_db(cls, data):
        query = "SELECT * FROM users WHERE email_address = %(email_address)s;"
        result = connectToMySQL('login_and_registration').query_db(query, data)
        if len(result) < 1:
            return False
        return cls(result[0])

    # USER: INFO RETRIEVAL
    @classmethod
    def access_user(cls, data):
        query = "SELECT * FROM users WHERE id=%(id)s;"
        results = connectToMySQL('login_and_registration').query_db(query, data)
        return results[0]

    # # NINJA: UPDATE
    # @classmethod
    # def edit(cls, data):
    #     query = "UPDATE ninjas SET first_name=%(first_name)s, last_name=%(last_name)s, age=%(age)s WHERE users.id=%(id)s"
    #     return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # # NINJA: DELETE
    # @classmethod
    # def delete(cls, data):
    #     query = "DELETE FROM ninjas WHERE id=%(id)s;"
    #     return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)