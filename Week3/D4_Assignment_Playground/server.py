from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/play')
def three_blue_boxes():
    return render_template("ThreeBlueBox.html")

@app.route('/play/<int:number>')
def multiple_boxes(number):
    return render_template("MultipleBoxes.html", number=number)

@app.route('/play/<int:number>/<color>')
def multiple_boxes_and_color(number, color):
    return render_template("MultipleBoxesAndColor.html", number=number, color=color)

if __name__=="__main__":
    app.run(debug=True)