# ------------------------IMPORTS------------------------ #
from flask import get_flashed_messages, render_template, redirect, request, session, flash
from flask_app.models.recipe import Recipe
from flask_bcrypt import Bcrypt
from flask_app import app
from crypt import methods

bcrypt = Bcrypt(app)


# ------------------------GET ROUTES------------------------ #
# RECIPE: SHOW
@app.route("/recipes/<int:id>")
def show_recipe(id):
    data = {
        "id": id
    }
    recipe = Recipe.read_recipe(data)
    return render_template("show_recipe.html", recipe=recipe)

# RECIPE: NEW
@app.route("/recipes/new")
def new_recipe():
    return render_template("add_recipe.html")

# RECIPE: EDIT
@app.route("/recipes/edit/<int:id>")
def edit_recipe(id):
    data = {
        "id": id
    }
    recipe = Recipe.read_recipe(data)
    return render_template("edit_recipe.html", recipe=recipe)


# ------------------------POST ROUTES------------------------ #
# RECIPE: ADDING
@app.route("/recipes/adding", methods=["POST"])
def adding_recipe():
    data = {
        "name": request.form['name'],
        "description": request.form['description'],
        "instructions": request.form['instructions'],
        "created_at": request.form['created_at'],
        "under_30": request.form['under_30'],
    }
    if not Recipe.validate_recipe(request.form):
        return redirect("/recipes/new")
    recipe = Recipe.create_recipe(data)
    return redirect("/dashboard")

# RECIPE: EDITING
@app.route("/recipes/editing/<int:id>", methods=["POST"])
def editing_recipe(id):
    data = {
        "name": request.form['name'],
        "description": request.form['description'],
        "instructions": request.form['instructions'],
        "created_at": request.form['created_at'],
        "under_30": request.form['under_30'],
    }
    if not Recipe.validate_recipe(request.form):
        return redirect("/recipes/edit/<int: id>")
    recipe = Recipe.update_recipe(data)
    return redirect("/dashboard")

# RECIPE: REMOVING
@app.route("/recipes/deleting/<int:id>", methods=["POST"])
def removing_recipe(id):
    data = {
        "id": id
    }
    Recipe.delete_recipe(data)
    return redirect("/dashboard")