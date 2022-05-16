# Starting a Server
---
```toc
```
---
## Walkthrough
1. In your project folder, `mkdir server`
2. `cd server` then `touch server.js` to create **server.js**
4. Run `npm init -y` to initialize a node project
5. Run `npm install express mongoose` to install **express** and **mongoose**
6. `mkdir config controllers models routes` parallel to your **package.json**
7. Create the following files:
	- /server/**server.js**
	```js
	// ------------------------------------------------Declarations
	const express = require('express');
	const app = express();
	const PORT = 8000;
	const DB = 'joke'
	
	// ------------------------------------------------Middleware
	app.use(express.json(), express.urlencoded({extended:true}))
	
	// ------------------------------------------------Connection to Files
	const config = require("./config/mongoose.config")
	config(DB);
	const routes = require("./routes/users.routes")
	routes(app);
	
	
	// ------------------------------------------------Server Initialization
	app.listen(PORT, () => {
		console.log(`Server is running on PORT ${8000}!`);
	})
	```
	- /server/config/**mongoose.config.js**
	```js
	// ------------------------------------------------Declarations
	const mongoose = require('mongoose');
	
	// ------------------------------------------------Connection to DB
	module.exports = (DB) => {
		mongoose.connect(`mongodb://localhost/${DB}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then( () => console.log(`Successfully established a connection to the database, ${DB}`) )
		.catch( (err) => console.log(`Something went wrong when connecting to the database, ${DB}`, err) )
	}
	```
	- /server/controller/**user.controllers.js**
	```js
	// ------------------------------------------------Declarations
	const User = require('../models/user.model');
	
	// ------------------------------------------------CRUD
	module.exports.findAllUsers = (req, res) => {
		User.find()
			.then(allDaUsers => res.json({ users: allDaUsers }))
			.catch(err => res.json({ message: 'Something went wrong', error: err}));
	}
	
	module.exports.findOneSingleUser = (req, res) => {
		User.create({ _id: req.params.id })
			.then(oneSingleUser => res.json({ user: oneSingleUser }))
			.catch(err => res.json({ message: 'Something went wrong', error: err }));
	}
	
	module.exports.createNewUser = (req, res) => {
		User.create(req.body)
			.then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
			.catch(err => res.json({ message: 'Somethign went wrong', error: err }));
	}
	
	module.exports.updateExistingUser = (req, res) => {
		User.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true, runValidators: true }
		)
			.then(updatedUser => res.json({ user: updatedUser }))
			.catch(err => res.json({ message: 'Somethign went wrong', error: err}));
	}
	
	module.exports.deleteAnExistingUser = (req, res) => {
		User.deleteOne({ _id: req.params.id })
			.then(result => res.json({ result: result }))
			.catch(err => res.json({ message: 'Something went wrong', error: err}));
	}
	```
	- /server/models/**user.model.js**
	```js
	// ------------------------------------------------Declarations
	const mongoose = require('mongoose');
	const UserSchema = new mongoose.Schema({
		name: String,
		age: Number
	}, {timestamps: true})
	const User = mongoose.model('User', UserSchema);
	
	// ------------------------------------------------Export
	module.exports = User;
	```
	- /server/routes/**users.routes.js**
	```js
	// ------------------------------------------------Declaration
	const UserController = require('../controllers/user.controller');
	
	// ------------------------------------------------Export
	module.exports = app => {
	    app.get('/api/users', UserController.findAllUsers);
	    app.get('/api/users/:id', UserController.findOneSingleUser);
	    app.put('/api/users/:id', UserController.updateExistingUser);
	    app.post('/api/users', UserController.createNewUser);
	    app.delete('/api/users/:id', UserController.deleteAnExistingUser);
	}
	```
1. Push to GitHub so you can use what you have so far as a checkpoint
	- Run `touch .gitignore` to create a **.gitignore**
		- type `node_modules` in your **.gitignore** so you won't end up pushing it onto GitHub
	- Run `git init` to intialize a repository – if you want one
	- Run the rest of the code GitHub states on their website when you creata a repository
2.  Run `nodemon server.js` to execute the **server.js**


---

## Testing Server Connection
- Go to **Postman** and choose:
	- **Post**
	- **Body**
	- **Raw**
	- **JSON**
- Send in an object through **Postman** to fake a form submission:
	```JSON
	{
		"firstName": Michael,
		"lastName": Catapang
	}
	```