from flask_app.models.plan import Plan
from flask_app import app
from flask import render_template, jsonify, request, redirect

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/plans')
def users():
    return jsonify(Plan.get_all_json())