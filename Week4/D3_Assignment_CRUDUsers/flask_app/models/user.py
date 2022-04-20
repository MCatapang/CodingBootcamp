# ------------------------IMPORT------------------------ #
from flask_app.config.mysqlconnection import connectToMySQL


# ------------------------CLASS: USER------------------------ #
class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # SELECT ALL USERS
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('users_schema').query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users

    # SELECT ONE USER
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM users WHERE id=%(id)s"
        results = connectToMySQL('users_schema').query_db(query, data)
        return cls(results[0])

    # USER: CREATE
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, club_id, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(club_id)s, NOW(), NOW());"
        return connectToMySQL('users_schema').query_db(query, data)

    # USER: EDIT
    @classmethod
    def edit(cls, data):
        query = "UPDATE users SET first_name=%(first_name)s, last_name=%(last_name)s, email=%(email)s WHERE users.id=%(id)s"
        return connectToMySQL('users_schema').query_db(query, data)

    # USER: DELETE
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM users WHERE id=%(id)s;"
        return connectToMySQL('users_schema').query_db(query, data)