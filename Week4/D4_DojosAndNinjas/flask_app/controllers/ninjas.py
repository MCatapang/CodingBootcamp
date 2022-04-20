# ------------------------IMPORTS------------------------ #
from flask_app import app
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo
from flask import render_template, redirect, request, session, flash


# ------------------------GET ROUTES------------------------ #
# NINJA CREATION PAGE
@app.route("/ninjas")
def ninja_create():
    dojos = Dojo.get_all()
    return render_template("ninjas.html", all_dojos = dojos)


# ------------------------POST ROUTES------------------------ #
# NINJA: CREATE
@app.route("/ninjas/create", methods=["POST"])
def ninjasCreate():
    data = {
        "dojo_id": request.form["dojo_id"],
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "age": request.form["age"]
    }
    Ninja.save(data)
    return redirect("/dojos")