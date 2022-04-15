# Checklist: Setting Up Website

## One-Time Process
1. Install Pip Environment
    ```
    pip3 install pipenv
    ```

## Everytime Thing
1. Create a ***static*** folder inside your project folder.
    - This is where you'll store:
        - CSS
        - Javascript
        - Images
2. Create a ***templates*** folder inside your project folder.
    - This is where you'll store:
        - HTML
3. Install Flask
    ```
    pipenv install flask==2.0.3
    ```
    - Doing so will create a ***Pipfile*** and ***Pipfile.lock*** file inside your project folder.
4. Initiliaze the Pip Virtual Environment
    ```
    pipenv shell
    ```
5. Run the code:
    ```
    pipenv install PyMySQL flask
    ```
    - This will create a ***Pipfile*** and ***Pipfile*.lock** similar to installing flask
6. Create Database
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
7. Create ***server.py***
    -  ***server.py*** file
8. Create ***mysqlconnection.py***
    - Copy and paste either one of the boilerplate code below into your ***mysqlconnection.py*** file
        - Without Comments:
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
        - With Comments
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
9. Create Class Based on Database Table
    - Make a Python file named in accordance to the table you're referring to from your database.
        - e.g., "friend.py"
    - In this file, copy and paste the code below
        - WITHOUT COMMENT
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
            ```
        - WITH COMMENT
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
                        
