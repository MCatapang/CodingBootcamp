# ------------------------IMPORT------------------------ #
from flask_app.config.mysqlconnection import connectToMySQL


# ------------------------CLASS: USER------------------------ #
class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']

    # SELECT ALL NINJAS
    @classmethod
    def get_all(cls, data):
        query = "SELECT * FROM ninjas WHERE dojo_id=%(id)s;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        ninjas = []
        for ninja in results:
            ninjas.append(cls(ninja))
        return ninjas

    # # SELECT SOME NINJAS
    # @classmethod
    # def get_some(cls, data):
    #     query = "SELECT * FROM ninjas WHERE dojo.id=%(dojo_id)s"
    #     results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
    #     some_ninjas = []
    #     for ninja in results:
    #         some_ninjas.append(cls(ninja))
    #     return some_ninjas

    # NINJA: CREATE
    @classmethod
    def save(cls, data):
        query = "INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id) VALUES (%(first_name)s, %(last_name)s, %(age)s, NOW(), NOW(), %(dojo_id)s);"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # NINJA: EDIT
    @classmethod
    def edit(cls, data):
        query = "UPDATE ninjas SET first_name=%(first_name)s, last_name=%(last_name)s, age=%(age)s WHERE users.id=%(id)s"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    # NINJA: DELETE
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM ninjas WHERE id=%(id)s;"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)