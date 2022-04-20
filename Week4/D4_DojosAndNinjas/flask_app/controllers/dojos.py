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
    one_dojo = Dojo.get_one(data)
    ninjas = Ninja.get_all(data)
    return render_template("dojo_show.html", dojo = one_dojo, some_ninjas = ninjas)



# ------------------------POST ROUTES------------------------ #
# DOJO: CREATE
@app.route("/dojos/create", methods=["POST"])
def dojosCreate():
    data = {
        "name": request.form["name"]
    }
    Dojo.save(data)
    return redirect("/dojos")