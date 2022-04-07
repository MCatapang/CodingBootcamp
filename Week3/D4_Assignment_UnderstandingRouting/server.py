from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html", phrase="hello", times=5)

@app.route('/dojo')
def hello_dojo():
    return 'Dojo!'

@app.route("/say/<name>")
def say_name(name):
    return "Hello " + str(name).capitalize()


@app.route("/repeat/<int:number>/<string:desired_word>")
def repeat_string(number, desired_word):
    return str(desired_word*int(number))

@app.route("/<any>")
def sorry_response(any):
    if any:
        return ("Sorry! No response. Try again.")


if __name__=="__main__":
    app.run(debug=True)