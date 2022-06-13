# ------------------------IMPORTS------------------------ #
from flask_app import app
from flask_app.models.user import User
# The line of code below is a tentative addition. May break code.
from flask_app.models.club import Club
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
    clubs = Club.get_all()
    # Line of code below is tentative
    return render_template("create.html", all_clubs = clubs)

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