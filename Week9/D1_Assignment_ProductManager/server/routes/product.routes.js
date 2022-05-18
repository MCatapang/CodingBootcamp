// ------------------------------------------------Declaration
const ProductController = require('../controllers/product.controller');

// ------------------------------------------------Export
module.exports = app => {
    // --------------------------------------------Export - Create
    app.post('/api/products/new', ProductController.createNewProduct);
    
    // --------------------------------------------Export - Read (All)
    app.get('/api/products', ProductController.findAllProducts);

    // --------------------------------------------Export - Read (One)
    app.get('/api/products/:id', ProductController.findOneSingleProduct);
    
    // --------------------------------------------Export - Update
    app.put('/api/products/udpate/:id', ProductController.updateExistingProduct);
    
    // --------------------------------------------Export - Delete
    app.delete('/api/products/delete/:id', ProductController.deleteAnExistingProduct);
}