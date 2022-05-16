// ------------------------------------------------Declaration
const JokesController = require('../controllers/jokes.controller');

// ------------------------------------------------Export
module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('api/jokes/:_id', JokesController.findOneJoke);
    app.get('api/jokes/random', JokesController.findRandomJoke);
    app.post('/api/jokes/new', JokesController.createJoke);
    app.put('/api/jokes/update/:_id', JokesController.updateJoke);
    app.delete('/api/jokes/delete/:_id', JokesController.deleteJoke);
}