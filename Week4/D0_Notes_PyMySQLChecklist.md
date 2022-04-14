# Checklist: Connecting Flask Applications to a Database

1. Run the code:
    ```
    pipenv install PyMySQL flask
    ```
    - This will create a ***Pipfile*** and ***Pipfile*.lock** similar to installing flask
2. Create Database
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
3. Create ***mysqlconnection.py***
    - This will be created alongside the ***server.py*** file that was created in the ***D0_Notes_FlaskChecklist***
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