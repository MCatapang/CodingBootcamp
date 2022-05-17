# Fullstack Walkthrough
---
```toc
```
---

## Basic Steps
1. `mkdir myNewProject` && `cd myNewProject`
2. `touch .gitignore`
	3. Type 'node_modules' in your '.gitignore'
5. `npx create-react-app client` && `cd client`
	1. `npm install axios react-router-dom`
	2. `cd src`
		1. `mkdir components` && `cd components`
		2. `touch Component.jsx`
		3. `cd ..`
	3. (OPTIONAL) `npm start`
	4. `cd ..`
	5. `cd ..`
7. `mkdir server` && `cd server`
	1. `touch server.js`
	2. `npm init -y`
	3. `npm install express mongoose cors`
	4. `mkdir config controllers models routes`
	5. Create **mongoose.config.js**, **user.controllers.js**, **user.model.js**, **user.routes.js** in their individual folders

---

## Client Files
- **App.js**
	```js
	// ------------------------------------------------Imports
	import Display from './components/Display';
	import Error from './components/Error';
	import Form from './components/Form';
	import {Route, Routes} from 'react-router-dom';
	import React from 'react';
	import './App.css';
	  
	
	// ------------------------------------------------App
	const App = () => {
		return (
			<>
				<Form/>
				<Routes>
					<Route path="/:category/:id" element={<Display/>} />
					<Route path="/error" element={<Error/>} />
				</Routes>
			</>
		);
	}
	
	// ------------------------------------------------Export
	export default App;
	```
- **Display.jsx** (component)
	```jsx
	// ------------------------------------------------Imports
	import React, {useState, useEffect} from 'react';
	import {useParams, useNavigate} from 'react-router-dom';
	import axios from 'axios';
	
	// ----------------------------------------------------Export
	const Results = (props) => {
		// ------------------------------------------------Constants
		const [neededInfo, setNeededInfo] = useState(null);
		const {category, id} = useParams();
		const navigate = useNavigate();
		
		// ------------------------------------------------API
		useEffect( () => {
			axios.get(`https://swapi.dev/api/${category}/${id}`)
				.then( result => setNeededInfo(result.data))
				.catch( err => {
					console.log(err);
					navigate("/error")
				});
		}, [category, id]);
		
		// ------------------------------------------------Conditional Render
		if(neededInfo !== null) {
			if(category == 'people') {
				return(
					<>
						<h1>Name: {neededInfo.name}</h1>
						<ul>
							<li>Gender: {neededInfo.gender}</li>
							<li>Mass: {neededInfo.mass}</li>
							<li>Hair Color: {neededInfo.hair_color}</li>
						</ul>
					</>
				)
			}
			else if(category == 'planets') {
				return(
					<>
						<h1>Name: {neededInfo.name}</h1>
						<ul>
							<li>Climate: {neededInfo.climate}</li>
							<li>Terrain: {neededInfo.terrain}</li>
							<li>Surface Water: {neededInfo.surface_water}</li>
						</ul>
					</>
				)
			}
		}
		if(neededInfo == null) {
			return(<h1>Loading... uwu</h1>);
		}
	}
	
	// ------------------------------------------------Export
	export default Results;
	```


---

## Server Files
- **mongoose.config.js**
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
- **user.controllers.js**
	```js
	// ------------------------------------------------Declarations
	const User = require('../models/user.model');
	
	// ------------------------------------------------CRUD
	module.exports.createNewUser = (req, res) => {
		User.create(req.body)
			.then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
			.catch(err => res.json({ message: 'Somethign went wrong', error: err }));
	}	
	
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
- **user.model.js**
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
- **users.routes.js**
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
- **server.js**
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