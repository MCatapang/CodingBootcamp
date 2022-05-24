// ----------------------------------------------------------------Declaration
const User = require('../models/user.models');


// ----------------------------------------------------------------Export: CRUD
module.exports = {
    // ------------------------------------------------------------Export: CRUD - Create
    createUser: (req, res) => {
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },

    // ------------------------------------------------------------Export: CRUD - Read (All)
    findUsers: (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json(err));
    },

    // ------------------------------------------------------------Export: CRUD - Read (One)
    findUser: (req, res) => {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },


    // ------------------------------------------------------------Export: CRUD - Update
    updateUser: (req, res) => {
        // // Commented out to try new method
        // User.findOneAndUpdate(
        //     { _id: req.params.id },
        //     req.body,
        //     { new: true, runValidators: true }
        // )
        //     .then(oneSingleAuthor => res.json({ Author: oneSingleAuthor }))
        //     .catch(err => res.status(400).json(err));
        User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedUser => res.json(updatedUser))
            .catch(err => res.status(400).json(err))
    },

    // ------------------------------------------------------------Export: CRUD - Delete
    deleteUser: (req, res) => {
        // // Commented out to try new method
        // User.deleteOne({ _id: req.params.id })
        //     .then(deleteConfirmation => res.json(deleteConfirmation))
        //     .catch(err => res.status(400).json(err));
        User.findByIdAndRemove(req.params.id)
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.status(400).json(err))
    }
}
