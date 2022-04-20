# ------------------------IMPORT------------------------ #
from flask_app.config.mysqlconnection import connectToMySQL


# ------------------------CLASS: DOJO------------------------ #
class Dojo:
    def __init__(self , data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # SELECT ALL DOJOS
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos

    # SELECT ONE DOJO
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM dojos WHERE id=%(id)s"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return cls(results[0])

    # DOJO: CREATE
    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # DOJO: EDIT
    @classmethod
    def edit(cls, data):
        query = "UPDATE dojos SET name=%(name)s, WHERE users.id=%(id)s"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # DOJO: DELETE
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM dojos WHERE id=%(id)s;"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # # One-to-Many Relationship CLass
    # @classmethod
    # def get_dojo_with_ninjas(cls , data):
    #     query = "SELECT * FROM clubs LEFT JOIN users ON users.club_id = club.id WHERE club.id = %(id)s;"
    #     results = connectToMySQL('users').query_db(query , data)
    #     club = cls(results[0])
    #     for row_from_db in results:
    #         user_data = {
    #             "id" : row_from_db["users.id"],
    #             "first_name" : row_from_db["users.first_name"],
    #             "last_name" : row_from_db["users.last_name"],
    #             "email": row_from_db["email"],
    #             "created_at" : row_from_db["users..created_at"],
    #             "updated_at" : row_from_db["users.updated_at"]
    #         }
    #         club.users.append(user.User(user_data))
    #     return club