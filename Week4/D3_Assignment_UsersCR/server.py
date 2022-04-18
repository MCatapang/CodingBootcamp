from flask import Flask, render_template, request, redirect, session
from user import User
app = Flask(__name__)  
app.secret_key = 'loser user'


@app.route("/users")
def index():
    users = User.get_all()
    return render_template("all_users.html", all_users = users)

@app.route("/users/create")
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


if __name__ == "__main__":
    app.run(debug=True)