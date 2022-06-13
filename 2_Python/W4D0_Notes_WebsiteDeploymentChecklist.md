# Website Deployment Checklist 

## **ONE-TIME PROCESS**
1. Install Pip Environment
    - ```pip3 install pipenv```

2. Install PyMySQL
    - ```pip3 install PyMySQL```

## **EVERYTIME PROCESS**
1. Create the following project folder structure:
    - [ ] [Project Folder Name (e.g., ***D4_DojosAndNinjas***)]
        - [ ] ***server.py***
        - [ ] ***flask_app***
            - [ ] ***\_\_init\_\_.py***
            - [ ] ***config***
                - [ ] ***mysqlconnection.py***
            - [ ] ***controllers***
                - [ ] [Plural Database Table Name (e.g., ***dojos***)]***.py***
                - [ ] [Any Additional Controllers]
            - [ ] ***models***
                - [ ] [Singular Database Table Name (e.g., ***dojo***)]***.py***
                - [ ] [Any Additional Models]
            - [ ] ***static***
                - [ ] ***css***
                - [ ] ***images***
                - [ ] ***javascript***
            - [ ] ***templates***
                - [ ] [Any HTML Needed]

2. Paste the following boilerplate codes in your files:
    - [ ] ***server.py***
        ```py
        # ------------------------IMPORTS------------------------ #
        from flask_app import app
        from flask_app.controllers import dojos, ninjas


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
    - Controllers
        - [ ] ***dojos.py***
            ```py
            # ------------------------IMPORTS------------------------ #
            from flask_app import app
            from flask_app.models.dojo import Dojo
            from flask_app.models.ninja import Ninja
            from flask import render_template, redirect, request, session, flash


            # ------------------------GET ROUTES------------------------ #
            # REDIRECT TO LANDING PAGE
            @app.route("/")
            def index():
                return redirect("/dojos")

            # LANDING PAGE: ALL DOJOS
            @app.route("/dojos")
            def dojo_all():
                dojos = Dojo.get_all()
                return render_template("dojos.html", all_dojos = dojos)

            # ALL NINJAS IN A DOJO
            @app.route("/dojos/<int:id>")
            def ninjas_in_dojo(id):
                data = {
                    "id": id,
                }
                dojo = Dojo.get_dojo_has_ninjas(data)
                return render_template("dojo_show.html", dojo=dojo)



            # ------------------------POST ROUTES------------------------ #
            # DOJO: CREATE
            @app.route("/dojos/create", methods=["POST"])
            def create_dojo():
                data = {
                    "name": request.form["name"]
                }
                Dojo.save(data)
                return redirect("/dojos")
            ```
        - [ ] ***ninjas.py***
            ```py
            # ------------------------IMPORTS------------------------ #
            from flask_app import app
            from flask_app.models.ninja import Ninja
            from flask_app.models.dojo import Dojo
            from flask import get_flashed_messages, render_template, redirect, request, session, flash

            from flask_bcrypt import Bcrypt
            bcrypt = Bcrypt(app)

            # ------------------------GET ROUTES------------------------ #
            # NINJA CREATION PAGE
            @app.route("/ninjas")
            def ninja_create():
                dojos = Dojo.get_all()
                return render_template("ninjas.html", all_dojos = dojos)


            # ------------------------POST ROUTES------------------------ #
            # NINJA: CREATE
            @app.route("/ninjas/create", methods=["POST"])
            def create_ninja():
                if not Ninja.validate_ninja(request.form):
                    return redirect("/ninjas")
                # pw_wash = bcrypt.generate_password_hash(request.form['password']) # this hashes the password that users input
                data = {
                    "dojo_id": request.form["dojo_id"],
                    "first_name": request.form["first_name"],
                    "last_name": request.form["last_name"],
                    "age": request.form["age"],
                    # "username": request.form['username'], # if you had a username input, this is where you would pass it in
                    # "password": pw_wash # this is where you'll also pass in the hashed password if you had a password input
                }
                # Ninja.save(data) # this was prior lines of code before we changed it into the next two lines of code below
                ninja_id = Ninja.save(data) # not sure why we're setting it equal to each other
                session['ninja_id'] = ninja_id # not sure why we;re saving ninja_id into our session
                return redirect("/dojos")

            # LOGIN
            @app.route("/login", methods=["POST"])
            def login():
                data =  {
                    "email": request.form["email"]
                }
                ninja_in_db = Ninja.get_by_email(data)
                if not ninja_in_db: # This one checks where the ninja exists in the db through their username/email
                    flash("Invalid Email/Password")
                    return redirect("/ninjas")
                if not bcrypt.check_password_hash(ninja_in_db.password, request.form['password']): # this one checks if the password was entered correctly
                    flash("Invalid Email/Password") # you want to have the same flash message as the invalid entry
                    return redirect('/ninjas')
                session['ninja_id'] = ninja_in_db.id # if the username and passwords match, then we save the ninja_id into session to keep track of them
                return redirect("/dojos")
            ```
    - Models
        - [ ] ***dojo.py***
            ```py
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
            ```
        - [ ] ***ninja.py***
            ```py
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
            ```

3. Create a database in MySQL Workbench.
    - You can do so either from an ERD or a query.
    - Use the following query syntax if you want to create a database using the query line:
        ```sql
        CREATE DATABASE database_name
        CREATE TABLE table_name (
            id INT NOT NULL AUTO_INCREMENT,
            first_name VARCHAR(45),
            last_name VARCHAR(45),
            occupation VARCHAR(45),
            created_at DATETIME,
            updated_at DATETIME,
            PRIMARY KEY (id)
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
        - [ ] ```pipenv install werkzeug==2.0.3 flask==2.0.3 flask-bcrypt```
    - [ ] ```python3 server.py```
    - [ ] Check ***127.0.0.1:5000/*** to see your default landing page!