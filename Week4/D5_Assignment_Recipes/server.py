# ------------------------IMPORTS------------------------ #
from flask_app import app
from flask_app.controllers import recipes, users


# ------------------------DUNDER------------------------ #
if __name__ == "__main__":
    app.run(debug=True)