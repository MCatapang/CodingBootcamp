// ----------------------------------------------------------------Declaration
const AuthorController = require('../controllers/author.controllers');

// ----------------------------------------------------------------Export
module.exports = app => {
    // ------------------------------------------------------------Export - Create
    app.post('/api/authors/new', AuthorController.createNewAuthor);
    
    // ------------------------------------------------------------Export - Read (All)
    app.get('/api/authors', AuthorController.findAllAuthors);

    // ------------------------------------------------------------Export - Read (One)
    app.get('/api/authors/:id', AuthorController.findOneSingleAuthor);
    
    // ------------------------------------------------------------Export - Update
    app.put('/api/authors/update/:id', AuthorController.updateExistingAuthor);
    
    // ------------------------------------------------------------Export - Delete
    app.delete('/api/authors/delete/:id', AuthorController.deleteAnExistingAuthor);
}