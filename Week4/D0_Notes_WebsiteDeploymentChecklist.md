# Website Deployment Checklist 

## **ONE-TIME PROCESS**
1. Install Pip Environment
    - ```pip3 install pipenv```

2. Install PyMySQL
    - ```pip3 install PyMySQL```

## **EVERYTIME PROCESS**
1. Create the following project folder structure:
    - [Project Folder Name (e.g., ***D3_Assignment_CrudUsers***)]
        - ***server.py***
        - ***flask_app***
            - ***\_\_init\_\_.py***
        - ***config***
            - ***mysqlconnection.py***
        - ***controllers***
            - [Plural Database Table Name (e.g., ***users***)]***.py***
        - ***models***
            - [Singular Database Table Name (e.g., ***user***)]***.py***
        - ***static***
            - ***css***
            - ***images***
            - ***javascript***
        - ***templates***
            - [Any HTML Needed]

2. Paste the following boilerplate codes in your files:
    - [ ] ***server.py***
        ```py
        # ------------------------IMPORTS------------------------ #
        from flask_app.controllers import users
        from flask_app import app


        # ------------------------DUNDER------------------------ #
        if __name__ == "__main__":
            app.run(debug=True)
        ```
    - [ ] ***\_\_init\_\_.py***
        ```py
        from flask import Flask
        app = Flask(__name__)
        app.secret_key = "and they were roommates"
        ```
    - [ ] ***mysqlconnection.py***
        ```py
        # ------------------------IMPORT------------------------ #
        import pymysql.cursors


        # ------------------------MySQLConnection------------------------ #
        class MySQLConnection:
            def __init__(self, db):
                connection = pymysql.connect(host = 'localhost',
                                            user = 'root', 
                                            password = 'rootroot', 
                                            db = db,
                                            charset = 'utf8mb4',
                                            cursorclass = pymysql.cursors.DictCursor,
                                            autocommit = True)
                self.connection = connection
            def query_db(self, query, data=None):
                with self.connection.cursor() as cursor:
                    try:
                        query = cursor.mogrify(query, data)
                        print("Running Query:", query)
            
                        cursor.execute(query, data)
                        if query.lower().find("insert") >= 0:
                            self.connection.commit()
                            return cursor.lastrowid
                        elif query.lower().find("select") >= 0:
                            result = cursor.fetchall()
                            return result
                        else:
                            self.connection.commit()
                    except Exception as e:
                        print("Something went wrong", e)
                        return False
                    finally:
                        self.connection.close() 


        # ------------------------ACCESS TO DATABASE------------------------ #
        def connectToMySQL(db):
            return MySQLConnection(db)
        ```
    - [ ] ***users.py***
        ```py
        # ------------------------IMPORTS------------------------ #
        from flask_app import app
        from flask_app.models.user import User
        from flask import render_template, redirect, request, session, flash


        # ------------------------GET ROUTES------------------------ #
        # REDIRECT TO LANDING PAGE
        @app.route("/")
        def index():
            return redirect("/users")

        # LANDING PAGE: ALL USERS
        @app.route("/users")
        def user_all():
            users = User.get_all()
            return render_template("all_users.html", all_users = users)

        # USER PAGE: CREATE
        @app.route("/users/new")
        def user_new():
            return render_template("create.html")

        # USER PAGE: EDIT
        @app.route("/users/<int:id>/edit")
        def user_edit(id):
            data = {
                "id": id
            }
            user = User.get_one(data)
            return render_template("edit.html", user=user)

        # USER PAGE: DELETE
        @app.route("/users/<int:id>/destroy")
        def deleting(id):
            data = {
                "id": id
            }
            User.delete(data)
            return redirect("/users")


        # ------------------------POST ROUTES------------------------ #
        # USER ROUTE: CREATE
        @app.route("/users/creating", methods=["POST"])
        def creating():
            data = {
                "first_name": request.form["first_name"],
                "last_name": request.form["last_name"],
                "email": request.form["email"]
            }
            User.save(data)
            return redirect("/users")

        # USER PAGE: EDIT
        @app.route("/users/<int:id>/editing", methods=["POST"])
        def editing(id):
            data = {
                "id": id,
                "first_name": request.form["first_name"],
                "last_name": request.form["last_name"],
                "email": request.form["email"]
            }
            User.edit(data)
            return redirect("/users")
        ```
    - [ ] ***user.py***
        ```py
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
                query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, NOW(), NOW());"
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
        ```

3. Create a database in MySQL Workbench.
    - You can do so either from an ERD or a query.
    - Use the following query syntax if you want to create a database using the query line:
        ```sql
        CREATE DATABASE database_name
        CREATE TABLE table_name (
            id INT,
            first_name VARCHAR(45),
            last_name VARCHAR(45),
            occupation VARCHAR(45),
            created_at DATETIME,
            updated_at DATETIME
        );
        ```

4. Create ***Pipfile*** and ***Pipfile.lock***
    - [ ] Point your terminal at your project folder
        - When successful, your terminal command line should read
            ```
            maocatap@Zonja D3_Assignment_CRUDUsers %
            ```
    - [ ] Run the following installation commands:
        - [ ] ```pipenv install flask==2.0.3```
        - [ ] ```pipenv install PyMySQL```
    - [ ] Double-check that both pip files are located in your project folder.
        - If you remembered to point your terminal at your project folder, then this should be the case.


5. Execute the following Terminal commands in order to deploy your website.
    - [ ] ```pipenv shell```
    - [ ] ```python3 server.py```
    - [ ] Check ***127.0.0.1:5000/*** to see your default landing page!