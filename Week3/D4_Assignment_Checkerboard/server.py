from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def layer1():
    return render_template("index.html", column_count=8, row_count=8)

@app.route('/<int:column_count>')
def layer2(column_count):
    return render_template("index.html", column_count=column_count, row_count=8)

@app.route('/<int:column_count>/<int:row_count>')
def layer3(column_count, row_count):
    return render_template("index.html", column_count=column_count, row_count=row_count)

@app.route('/<int:column_count>/<int:row_count>/<first_color>/<second_color>')
def layer4(column_count, row_count, first_color, second_color):
    return render_template("index.html", column_count=column_count, row_count=row_count)

if __name__=="__main__":
    app.run(debug=True)