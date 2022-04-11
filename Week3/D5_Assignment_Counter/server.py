from turtle import clear
from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)  
app.secret_key = 'and they were roommates'

@app.route('/')
# the default is the Get method
def index():
    if 'click' in session:
        session['click'] += 1
    else:
        session['click'] = 0
    return render_template("index.html")

@app.route('/destroy_session')
def clearSession():
    session.clear()
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)    