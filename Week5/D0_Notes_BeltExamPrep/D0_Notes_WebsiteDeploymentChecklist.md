# Website Deployment Checklist

## **ONE-TIME PROCESS**
1. Install Pip Environment
    ```
    pip3 install pipenv
    ```

## **EVERYTIME PROCESS**
1. Create a project folder.
    - This project folder will contain everything related to your project
    - Make sure that you have your project folder open in your terminal before proceeding with any of the subsequent steps
2. Create a ***static*** folder inside your project folder.
    - This is where you'll store:
        - CSS
        - Javascript
        - Images
3. Create a ***templates*** folder inside your project folder.
    - This is where you'll store:
        - HTML
4. Install Flask
    - User your terminal to navigate to your project folder
    - Once your project folder is targeted, run the following code:
        ```
        pipenv install flask==2.0.3
        ```
    - Doing so will create a ***Pipfile*** and ***Pipfile.lock*** file inside your project folder.
5. Install PyMySql
    - Run the code below:
        ```
        pip3 install PyMySQL
        ```
6. Install PyMySQL Flask
    - Run the code below:
        ```
        pipenv install PyMySQL flask
        ```
    - This will create a ***Pipfile*** and ***Pipfile*.lock** similar to installing flask
    - If ***Pipfile.lock*** already exists (and it should be after you install flask), this step will simply update ***Pipfile.lock***
7. Create Database
    - Utilize the MySQL Workbench to create a database. 
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
8. Create Class Based on Database Table
    - Make a Python file named in accordance to the table you're referring to from your database.
        - e.g., "friend.py"
    - In this file, copy and paste the code below
        - WITHOUT COMMENTS (modified):
            ```py
            from mysqlconnection import connectToMySQL

            class Friend:
                def __init__( self , data ):
                    self.id = data['id']
                    self.first_name = data['first_name']
                    self.last_name = data['last_name']
                    self.occupation = data['occupation']
                    self.created_at = data['created_at']
                    self.updated_at = data['updated_at']
                @classmethod
                def get_all(cls):
                    query = "SELECT * FROM friends;"
                    results = connectToMySQL('first_flask').query_db(query)
                    friends = []
                    for friend in results:
                        friends.append( cls(friend) )
                    return friends
                @classmethod
                def save(cls, data):
                    query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(fname)s, %(lname)s, %(occ)s, NOW(), NOW());"
                    return connectToMySQL('first_flask').query_db(query, data)
            ```
        - WITH COMMENTS (original):
            ```py
            # import the function that will return an instance of a connection
            from mysqlconnection import connectToMySQL

            # model the class after the friend table from our database
            class Friend:
                def __init__( self , data ):
                    self.id = data['id']
                    self.first_name = data['first_name']
                    self.last_name = data['last_name']
                    self.occupation = data['occupation']
                    self.created_at = data['created_at']
                    self.updated_at = data['updated_at']
                # Now we use class methods to query our database
                @classmethod
                def get_all(cls):
                    query = "SELECT * FROM friends;"
                    # make sure to call the connectToMySQL function with the schema you are targeting.
                    results = connectToMySQL('first_flask').query_db(query)
                    # Create an empty list to append our instances of friends
                    friends = []
                    # Iterate over the db results and create instances of friends with cls.
                    for friend in results:
                        friends.append( cls(friend) )
                    return friends
            ```
9. Create ***mysqlconnection.py***
    - Copy and paste either one of the boilerplate code below into your ***mysqlconnection.py*** file
        - WITHOUT COMMENTS (original):
            ```py
            import pymysql.cursors

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
            def connectToMySQL(db):
                return MySQLConnection(db)
            ```
        - WITH COMMENTS (original):
            ```py
            # a cursor is the object we use to interact with the database
            import pymysql.cursors

            # this class will give us an instance of a connection to our database
            class MySQLConnection:
                def __init__(self, db):
                    # change the user and password as needed
                    connection = pymysql.connect(host = 'localhost',
                                                user = 'root', 
                                                password = 'rootroot', 
                                                db = db,
                                                charset = 'utf8mb4',
                                                cursorclass = pymysql.cursors.DictCursor,
                                                autocommit = True)
                    # establish the connection to the database
                    self.connection = connection
                # the method to query the database
                def query_db(self, query, data=None):
                    with self.connection.cursor() as cursor:
                        try:
                            query = cursor.mogrify(query, data)
                            print("Running Query:", query)
                
                            cursor.execute(query, data)
                            if query.lower().find("insert") >= 0:
                                # INSERT queries will return the ID NUMBER of the row inserted
                                self.connection.commit()
                                return cursor.lastrowid
                            elif query.lower().find("select") >= 0:
                                # SELECT queries will return the data from the database as a LIST OF DICTIONARIES
                                result = cursor.fetchall()
                                return result
                            else:
                                # UPDATE and DELETE queries will return nothing
                                self.connection.commit()
                        except Exception as e:
                            # if the query fails the method will return FALSE
                            print("Something went wrong", e)
                            return False
                        finally:
                            # close the connection
                            self.connection.close() 
            # connectToMySQL receives the database we're using and uses it to create an instance of MySQLConnection
            def connectToMySQL(db):
                return MySQLConnection(db)
            ```
10. Create ***server.py***
    -  Copy and paste the boilerplate code below:
        - WITHOUT COMMENTS (modified):
            ```py
                from flask import Flask, render_template, request, redirect, session
                from friend import Friend
                app = Flask(__name__)  
                app.secret_key = 'this string is the secret key'


                @app.route("/")
                def index():
                    friends = Friend.get_all()
                    return render_template("index.html", all_friends = friends)

                @app.route("/create_friend", methods=["POST"])
                def create_friend():
                    data = {
                        "fname": request.form["fname"],
                        "lname": request.form["lname"],
                        "occ": request.form["occ"]
                    }
                    Friend.save(data)
                    return redirect("/")


                if __name__ == "__main__":
                    app.run(debug=True)
            ```
        - WITH COMMENTS (original):
            ```py
                from flask import Flask, render_template, request, redirect, session
                # import the class from friend.py
                from friend import Friend
                app = Flask(__name__)
                app.secret_key = 'this string is the secret key'

                @app.route("/")
                def index():
                    # call the get all classmethod to get all friends
                    friends = Friend.get_all()
                    return render_template("index.html")
                            
                if __name__ == "__main__":
                    app.run(debug=True)
            ```
11. Initiliaze the Pip Virtual Environment
    - Run the following code:
        ```
        pipenv shell
        ```
12. Initialize ***server.py***
    - Double-check that your terminal is pointing at the correct project folder so that your terminal will open the correct ***server.py*** file 
    - Run the following code:
        ```
        python3 server.py
        ````
13. Congratulations! You have deployed your app/website!
    - Check **127.0.0.1:5000/** to see your default landing page.
