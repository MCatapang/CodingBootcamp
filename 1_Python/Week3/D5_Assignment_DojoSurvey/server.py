from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)  
app.secret_key = 'and they were roommates'




# DEFAULT ROUTE
@app.route("/")
def index():
    session.clear()
    return render_template("index.html")
# for larger projects, dedicate a route to clearing sessions
# determine whether it's needed on a project-to-project basis
# break up functionality as much as possible

# SESSION ROUTE
@app.route("/process", methods=['POST'])
def process():
    session["name"] = request.form["name"]
    session["dojoLocation"] = request.form["dojoLocation"]
    session["favoriteLanguage"] = request.form["favoriteLanguage"]
    session["comments"] = request.form["comments"]
    return redirect("/results")   

# RESULTS ROUTE
@app.route("/results")
def results():
    return render_template("results.html")    




if __name__=="__main__":   
    app.run(debug=True)    