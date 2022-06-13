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