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
	- **server.js**
	```js
	// ------------------------------------------------Boilerplate
	const express = require('express');
	const app = express();
	const PORT = 8000;
	
	// ------------------------------------------------Middleware
	app.use(express.json(), express.urlencoded({extended:true}))
	
	// ------------------------------------------------Connection to Files
	const routes = require("./routes/users.routes")
	routes(app);
	const config = require("./config/mongoose.config")
	config();
	
	// ------------------------------------------------Boilerplate
	app.listen(PORT, () => {
		console.log(`Server is running on PORT ${8000}!`);
	})
	```
	- **mongoose.config.js**
	```js
	// ------------------------------------------------Boilerplate
	const mongoose = require('mongoose');
	const DB = 'the_real_friday_db'
	
	// ------------------------------------------------Connection to DB
	mongoose.connect('mongodb://localhost/' + DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
		.then( () => console.log('Established a connection to the DB'))
		.catch( err => console.log('Something went wrong', err ))
	```
	- **users.routes.js**
	```js
	// ------------------------------------------------Temporary DB
	const users = [
		{firstName: "Hello", lastName: "World"},
		{firstName: "Lovely", lastName: "Stuff"},
		{firstName: "Gojo", lastName: "Satoru"}
	]
	
	// ------------------------------------------------Temporary DB
	module.exports = (app, PORT) => {
		app.get("/api", (req, res) => {
			res.json({
				status: "ok",
				port: PORT
			})
		})
		
		app.get("/api/users", (req, res) => {
			res.json(users);
		})
		
		app.get("/api/users/:varID", (req, res) => {
			const {varIdx} = req.params;
			res.json({
				id: req.params.varIdx,
				user: users[req.params.varIdx]
			})
		})
		
		app.post("/api/users", (req, res) => {
			users.push(req.body);
			res.json({
				status: "ok",
				objectReceived: req.body
			})
		})
		
	}
	```
8. Push to GitHub so you can use what you have so far as a checkpoint
	- Run `touch .gitignore` to create a **.gitignore**
		- type `node_modules` in your **.gitignore** so you won't end up pushing it onto GitHub
	- Run `git init` to intialize a repository – if you want one
	- Run the rest of the code GitHub states on their website when you creata a repository
9.  Run `nodemon server.js` to execute the **server.js**


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