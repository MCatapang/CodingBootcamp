# ------------------------IMPORTS------------------------ #
from flask_app.controllers import users
from flask_app import app


# ------------------------DUNDER------------------------ #
if __name__ == "__main__":
    app.run(debug=True)