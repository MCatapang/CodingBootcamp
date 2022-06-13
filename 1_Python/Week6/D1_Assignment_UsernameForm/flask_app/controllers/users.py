# ------------------------IMPORTS------------------------ #
from flask import get_flashed_messages, render_template, redirect, request, session, flash
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
from flask_app import app
from flask import jsonify

bcrypt = Bcrypt(app)

# ------------------------GET ROUTES------------------------ #
# INDEX
@app.route("/")
def index():
    return render_template("index.html")


# ------------------------POST ROUTES------------------------ #
# REGISTERING
@app.route("/registering", methods=['POST'])
def registering():
    if not User.validate_user(request.form):
        return redirect("/")
    data = {
        "username": request.form["username"],
        "email_address": request.form["email_address"]
    }
    User.create(data)
    return redirect("/")