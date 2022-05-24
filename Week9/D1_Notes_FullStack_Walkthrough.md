# Fullstack Walkthrough
---
```toc
```
---

## Basic Steps
1. `mkdir myNewProject` && `cd myNewProject`
2. `touch .gitignore`
3. `npx create-react-app client` && `cd client`
	1. `npm install axios react-router-dom`
	2. `cd src`
		1. `mkdir components` && `cd components`
		2. `touch Component.jsx`
		3. `cd ..`
	3. (OPTIONAL) `npm start`
	4. `cd ..`
	5. `cd ..`
4. `mkdir server` && `cd server`
	1. `touch server.js`
	2. `npm init -y`
	3. `npm install express mongoose cors`
	4. `mkdir config controllers models routes`
	5. Create **mongoose.config.js**, **user.controllers.js**, **user.model.js**, **user.routes.js** in their individual folders

---

# .gitignore
```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```


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
- **index.jsx**
```js
	import React from 'react';
	import ReactDOM from 'react-dom/client';
	import './index.css';
	import App from './App';
	import reportWebVitals from './reportWebVitals';
	import { BrowserRouter } from 'react-router-dom';
	
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
	
	reportWebVitals();
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
	// ----------------------------------------------------------------Declarations
	const mongoose = require('mongoose');
	
	
	// ----------------------------------------------------------------Connection to DB
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
	// ----------------------------------------------------------------Declaration
	const Author = require('../models/Author.models');
	  
	
	// ----------------------------------------------------------------Export: CRUD
	module.exports = {
		// ------------------------------------------------------------Export: CRUD - Create
		createNewAuthor: (req, res) => {
			Author.create(req.body)
				.then(newlyCreatedAuthor => res.json({ Author: newlyCreatedAuthor }))
				.catch(err => res.status(400).json(err));
		},
	
		// ------------------------------------------------------------Export: CRUD - Read (All)
		findAllAuthors: (req, res) => {
			Author.find()
				.then(allDaAuthors => res.json({ Authors: allDaAuthors }))
				.catch(err => res.status(400).json(err));
		},
	
		// ------------------------------------------------------------Export: CRUD - Read (One)
		findOneSingleAuthor: (req, res) => {
			Author.findById(req.params.id)
				.then(oneSingleAuthor => res.json({ Author: oneSingleAuthor }))
				.catch(err => res.status(400).json(err));
		},
	
	
		// ------------------------------------------------------------Export: CRUD - Update
		updateExistingAuthor: (req, res) => {
			Author.findOneAndUpdate(
				{ _id: req.params.id },
				req.body,
				{ new: true, runValidators: true }
			)
				.then(oneSingleAuthor => res.json({ Author: oneSingleAuthor }))
				.catch(err => res.status(400).json(err));
		},

		// ------------------------------------------------------------Export: CRUD - Delete
		deleteAnExistingAuthor: (req, res) => {
			Author.deleteOne({ _id: req.params.id })
				.then(deleteConfirmation => res.json(deleteConfirmation))
				.catch(err => res.status(400).json(err));
		}
	}
	```
- **user.model.js**
	```js
	// ----------------------------------------------------------------Declarations
	const mongoose = require('mongoose');
	const AuthorSchema = new mongoose.Schema({
		name: {
			type: String,
			required: [true, "Author name is required!"],
			minlength: [3, "Author name must be at least 3 characters long!"]
		}
	}, {timestamps: true})
	const Author = mongoose.model('Author', AuthorSchema);


	// ----------------------------------------------------------------Export
	module.exports = Author;
	```
- **users.routes.js**
	```js
	// ----------------------------------------------------------------Declaration
	const AuthorController = require('../controllers/author.controllers');


	// ----------------------------------------------------------------Export
	module.exports = app => {
		// ------------------------------------------------------------Export - Create
		app.post('/api/authors', AuthorController.createNewAuthor);
		// ------------------------------------------------------------Export - Read (All)
		app.get('/api/authors', AuthorController.findAllAuthors);
		// ------------------------------------------------------------Export - Read (One)
		app.get('/api/authors/:id', AuthorController.findOneSingleAuthor);
		// ------------------------------------------------------------Export - Update
		app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
		// ------------------------------------------------------------Export - Delete
		app.delete('/api/authors/:id', AuthorController.deleteAnExistingAuthor);
	}
	```
- **server.js**
	```js
	// ----------------------------------------------------------------Declarations
	const express = require('express');
	const cors = require('cors');
	const app = express();
	const PORT = 8000;
	const DB = 'authors'

	
	// ----------------------------------------------------------------Middleware
	app.use(cors(), express.json(), express.urlencoded({extended:true}))


	// ----------------------------------------------------------------Connection to Files
	const config = require("./config/mongoose.config")
	config(DB);
	const routes = require("./routes/author.routes")
	routes(app);


	// ----------------------------------------------------------------Server Initialization
	app.listen(PORT, () => {
	console.log(`Server is running on PORT ${8000}!`);
	})
	```