from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/play')
def layer1():
    return render_template("template.html", number=3, color="blue")

@app.route('/play/<int:number>')
def layer2(number):
    return render_template("template.html", number=number, color="blue")

@app.route('/play/<int:number>/<color>')
def layer3(number, color):
    return render_template("template.html", number=number, color=color)

if __name__=="__main__":
    app.run(debug=True)