// ------------------------------------------------Declaration
const JokesController = require('../controllers/jokes.controller');

// ------------------------------------------------Export
module.exports = app => {
    app.post('/api/jokes/new', JokesController.createJoke);
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findOneJoke);
    app.get('/api/jokes/random', JokesController.findRandomJoke);
    app.put('/api/jokes/update/:id', JokesController.updateJoke);
    app.delete('/api/jokes/delete/:id', JokesController.deleteJoke);
}