// ------------------------------------------------Declarations
const { db } = require('../models/jokes.model');
const Joke = require('../models/jokes.model');

// ------------------------------------------------CRUD
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }) )
        .catch(err => res.json({ message: "The laugh's on you this time - the joke wasn't created!", error: err }));
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "All of the jokes couldn't be retrieved!", error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "The joke couldn't be retrieved!", error: err }));
}

module.exports.findRandomJoke = (req, res) => {
    let randomFloat = ( Math.random() * Joke.find().length );
    let randomInt = Math.floor(randomFloat);
    Joke.findOne({ _id: randomInt })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "A random joke couldn't be generated!", error: err }));
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "We couldn't make the joke funnier!", error: err}));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "The world is now one joke sadder!", error: err}));
}