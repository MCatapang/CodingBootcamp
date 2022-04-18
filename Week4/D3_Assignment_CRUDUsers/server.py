from flask import Flask, render_template, request, redirect, session
from user import User
app = Flask(__name__)  
app.secret_key = 'loser user'


@app.route("/")
def index():
    return redirect("/users")

@app.route("/users")
def user_all():
    users = User.get_all()
    return render_template("all_users.html", all_users = users)

@app.route("/users/new")
def user_new():
    return render_template("create.html")

@app.route("/users/creating", methods=["POST"])
def creating():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }
    User.save(data)
    return redirect("/users")

@app.route("/users/<int:id>/edit")
def user_edit(id):
    data = {
        "id": id
    }
    user = User.get_one(data)
    return render_template("edit.html", user=user)

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

@app.route("/users/<int:id>/destroy")
def deleting(id):
    data = {
        "id": id
    }
    User.delete(data)
    return redirect("/users")


if __name__ == "__main__":
    app.run(debug=True)