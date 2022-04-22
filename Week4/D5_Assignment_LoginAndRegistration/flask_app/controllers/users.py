# ------------------------IMPORTS------------------------ #
from crypt import methods
from flask_app.models.user import User
from flask_app import app
from flask import get_flashed_messages, render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# ------------------------GET ROUTES------------------------ #
# HOMEPAGE
@app.route("/")
def register_or_login():
    return render_template("register_or_login.html")

# USER DASHBOARD AFTER LOGIN
@app.route("/dashboard")
def dashboard():
    data = {
        "id": session['user_id']
    }
    user = User.access_user(data)
    return render_template("dashboard.html", user=user)

# HOMEPAGE AFTER LOGOUT
@app.route("/logout", methods=["POST"])
def logout():
    session.clear()
    return redirect("/")


# ------------------------POST ROUTES------------------------ #
# USER: CREATE
@app.route("/register", methods=["POST"])
def create_user():
    if not User.validate_user(request.form):
        return redirect("/")
    pw_wash = bcrypt.generate_password_hash(request.form['password'])
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email_address": request.form['email_address'],
        "password": pw_wash
    }
    user_id = User.create_user(data)
    session['user_id'] = user_id
    return redirect("/dashboard")

# USER: LOGIN
@app.route("/login", methods=["POST"])
def login_user():
    data = {
        "email_address": request.form['email_address']
    }
    user_in_db = User.check_if_in_db(data)
    if not user_in_db:
        flash("Invalid Email/Password", "loginError")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid Email/Password", "loginError")
        return redirect("/")
    session['user_id'] = user_in_db.id
    return redirect("/dashboard")