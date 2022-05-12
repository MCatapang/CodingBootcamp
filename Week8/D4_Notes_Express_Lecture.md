# Starting an Express Server

1. `npm init -y`: initializing a node project
	- `npm init -y`: tells the terminal to say yes on all the prompts
		- Will automatically point to **server.js** if you already have one created in your project folder
2. `npm install express`
3. In **server.js**
	```js
	const express = require("express")
	const PORT = 1337; // whatever number; all caps == global variable
	const app = express(); // creating an `app` object
	
	
	const myCallbackFunction = (req, res) => {
		res.json({message: "ok"})
	};
	
	app.get("/api/users/:unicornIdx", (req, res) => {
		const {unicornIdx} = req.params;
		res.json(users[req.params.unicornIdx]);
	})
	
	app.get("/api/hello", myCallbackFunction);)
	
	app.get("/api",(requestObj, responseObj) => {
		console.log("hello from /api"); // shows up in back-end console
		responseObj.json({key1: "hello", key2: "hello2"}) // shows up on your browser screen; you can only respond back with one thing
	})
	


	app.use(express.json()); // a middleware that allows us to receive JSON
	app.use(express.urlencoded({extended:true})

	app.post("/api/users", (req, res) => {
		console.log(req.body); // POST request get sent in a "body" of a form request from Postman or React
		users.push(req.body);
		res.json({status: "ok", users});
	})
	
	
	
	console.log("hello"); // will console.log front-side(?)
	
	app.listen(PORT, () => console.log(`>>SERVER started on port ${PORT} and is listening for REQuests to RESpond to<<`)) // won't appear on front-end console, but will be in back-end console (e.g, terminal)
	```
	- Use `nodemon` command in your terminal to listen for changes in your app.js