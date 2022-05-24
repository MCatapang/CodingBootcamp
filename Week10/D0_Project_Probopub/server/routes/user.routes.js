// ----------------------------------------------------------------Declaration
const UserController = require('../controllers/user.controllers');


// ----------------------------------------------------------------Export
module.exports = app => {
    // ------------------------------------------------------------Export - Create
    app.post('/api/users', UserController.createUser);
    // ------------------------------------------------------------Export - Read (All)
    app.get('/api/users', UserController.findUsers);
    // ------------------------------------------------------------Export - Read (One)
    app.get('/api/users/:id', UserController.findUser);
    // ------------------------------------------------------------Export - Update
    app.put('/api/users/:id', UserController.updateUser);
    // ------------------------------------------------------------Export - Delete
    app.delete('/api/users/:id', UserController.deleteUser);
}