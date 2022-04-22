# ------------------------IMPORT------------------------ #
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja


# ------------------------CLASS: DOJO------------------------ #
class Dojo:
    def __init__(self , data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    # DOJO: CREATE
    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # DOJO: READ (SELECT ALL DOJOS)
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos

    # DOJO: READ (SELECT ONE DOJO)
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM dojos WHERE id=%(id)s"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return cls(results[0])

    # DOJO'S NINJAS
    @classmethod
    def get_dojo_has_ninjas(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas on ninjas.dojo_id = dojos.id WHERE dojos.id = %(id)s;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        dojo = cls(results[0])
        for row_from_db in results:
            ninja_data = {
                "id": row_from_db["ninjas.id"],
                "first_name": row_from_db["first_name"],
                "last_name": row_from_db["last_name"],
                "age": row_from_db["age"],
                "created_at": row_from_db["ninjas.created_at"],
                "updated_at": row_from_db["ninjas.updated_at"],
                "dojo_id": row_from_db["dojo_id"]
            }
            dojo.ninjas.append(ninja.Ninja(ninja_data))
        return dojo

    # DOJO: UPDATE
    @classmethod
    def edit(cls, data):
        query = "UPDATE dojos SET name=%(name)s, WHERE users.id=%(id)s"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # DOJO: DELETE
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM dojos WHERE id=%(id)s;"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)