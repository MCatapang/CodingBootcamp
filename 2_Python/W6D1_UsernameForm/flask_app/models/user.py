# ------------------------IMPORT------------------------ #
from flask_app.config.mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
from flask_app import app
from flask import flash
import re

bcrypt = Bcrypt(app)


# ------------------------CLASS: NINJA------------------------ #
class User:
    def __init__(self, data):
        self.id = data['id']
        self.username = data['username']
        self.email_address = data['email_address']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (username, email_address, created_at, updated_at) VALUES (%(username)s, %(email_address)s, NOW(), NOW());"
        results = connectToMySQL('username_form').query_db(query, data)
        return results

    @classmethod
    def read(cls, data):
        query = "SELECT * FROM users;"
        results = connectToMySQL('username_form').query_db(query, data)
        users = []
        for user in results:
            users.append(cls(user))
        return users

    # STATIC METHOD - VALIDATION
    @staticmethod
    def validate_user(user):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        is_valid = True
        if len(user['username']) < 3:
            flash("Username must be at least 3 characters.")
            is_valid = False
        if not EMAIL_REGEX.match(user['email_address']): 
            flash("Invalid email address.")
            is_valid = False
        return is_valid