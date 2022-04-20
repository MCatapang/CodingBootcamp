# ------------------------IMPORT------------------------ #
from flask_app.config.mysqlconnection import connectToMySQL
# The import line below may only be necessary on your "many" models when you have a one-to-many relationship
from flask_app.models import user


# ------------------------CLASS: CLUB------------------------ #
class Club:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # For a One(e.g., Club)-to-Many(e.g., User) relationship, we need to create a list for the Many(i.e., User) in the One(i.e., Club)'s Class
        self.users = []

    @classmethod
    def save(cls, data):
        query = "INSERT INTO clubs (name, location, created_at, updated_at) VALUES (%(name)s, %(location)s, NOW(), NOW());"
        return connectToMySQL('clubs').query_db(query, data)

    @classmethod
    def get_club_with_users(cls , data):
        query = "SELECT * FROM clubs LEFT JOIN users ON users.club_id = club.id WHERE club.id = %(id)s;"
        results = connectToMySQL('users').query_db(query , data)
        club = cls(results[0])
        for row_from_db in results:
            user_data = {
                "id" : row_from_db["users.id"],
                "first_name" : row_from_db["users.first_name"],
                "last_name" : row_from_db["users.last_name"],
                "email": row_from_db["email"],
                "created_at" : row_from_db["users..created_at"],
                "updated_at" : row_from_db["users.updated_at"]
            }
            club.users.append(user.User(user_data))
        return club