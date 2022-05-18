// ------------------------------------------------Declaration
const Product = require('../models/product.model');

// ------------------------------------------------Export: CRUD
module.exports = {
    // --------------------------------------------Export: CRUD - Create
    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then(newlyCreatedProduct => res.json({ Product: newlyCreatedProduct }))
            .catch(err => res.status(400).json(err));
    },

    // --------------------------------------------Export: CRUD - Read (All)
    findAllProducts: (req, res) => {
        Product.find()
        .then(allDaProducts => res.json({ Products: allDaProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // --------------------------------------------Export: CRUD - Read (One)
    findOneSingleProduct: (req, res) => {
        Product.find({ _id: req.params.id })
        .then(oneSingleProduct => res.json({ Product: oneSingleProduct }))
        .catch(err => res.json({ message: 'Could not retrieve the specific product you are looking for', error: err }));
    },

    // --------------------------------------------Export: CRUD - Update
    updateExistingProduct: (req, res) => {
        Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => res.json({ Product: updatedProduct }))
            .catch(err => res.json({ message: 'Could not update your product!', error: err }));    
    },

    // --------------------------------------------Export: CRUD - Delete
    deleteAnExistingProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({ message: 'Something went wrong', err }));
    }
}