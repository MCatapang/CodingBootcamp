from flask_app import app
from flask_app.models.burger import Burger

@app.route('/create', methods=['POST'])
def create_burger():
    if not Burger.validate_burger(request.form):
        return redirect('/')
    # We're adding the lines of code above to utilize "flash" in validating form inputs; it's something that we haven't done before
    # The lines of code below are what we've usually had when saving form inputs into our database.
    Burger.save(request.form)
    return redirect("/burgers")