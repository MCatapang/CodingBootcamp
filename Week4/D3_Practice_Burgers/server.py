from flask_app.controllers import burgers
app = Flask(__name__)

if __name__=="__main__":
    app.run(debug=True)