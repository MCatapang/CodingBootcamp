# Mongoose
---
```toc
```
---
## Defining Mongoose
- **Mongoose** : the most popular library used for MongoDB with Node and Express
- Simplifies MongoDB queries with its own library of methods
- We can connect Mongoose directly to a MongoDB database
	- Mongoose will allow us to give more structure to our data with the addition of models and schemas
- It will act as a layer between our application and our database
- It will let us do things like validate and run complex queries more effectively
---
## Common Mongoose Commands
- Defining a User Schema
	```js
	const UserSchema = new mongoose.Schema({
		name: {type: String},
		age: {type: Number}
	}, {timestamps: true})
	const User = mongoose.model('User', UserSchema);
	```
- Finding all Users
	```js
	User.find()
		.then(users => {
		// logic with users results
	})
		.catch(err => res.json(err));
	```
- Finding all Users where their name is Jessica
	```js
	User.find({name: 'Jessica'})
		.then(usersNameJessica => {
			// logic with usersNamedJessica results
		})
		.catch(err => res.json(err));
	```
- Find one User by `_id`
    ```js
    User.findOne({ _id: '5d34d361db64c9267ed91f73'})
        .then(user => {})
        .catch(err => res.json(err));
    ```
- Create a user
	```js
    // ...create a new document to store in the User collection and save it to the DB.
    const bob = new User(req.body);
    // req.body is an object containing all the users data.
    // if we look at req.body as an object literal it would look like this
        /*
        * req.body = {
        *		"name": "Bob Ross",
        *		"age": 42
        *	}
        **/
    bob.save()
        .then(newUser => {
            // logic with succesfully saved newUser object
        })
        .catch(err => res.json(err));
    // If there's an error and the record was not saved, this (err) will contain validation errors.
	```
- Create a user (simplified)
	```js
	 // ...create a new document to store in the User collection and save it to the DB.
	const { userData } = req.body;
	User.create(userData)
	    .then(newUser => {
	        // logic with succesfully saved newUser object
	    })
	    .catch(err => res.json(err));
	 // If there's an error and the record was not saved, this (err) will contain validation errors.
	```
- Delete all users
	```js
	// ...delete all documents of the User collection
	User.remove()
	    .then(deletedUsers => {
	        // logic (if any) with successfully removed deletedUsers object
	    })
	    .catch(err => res.json(err));
	```
- Delete one user
	```js
	// ...delete 1 document that matches the query object criteria
	User.remove({_id: '5d34d361db64c9267ed91f73'})
	    .then(deletedUser => {
	        // logic (if any) with successfully removed deletedUser object
	    })
	    .catch(err => res.json(err));
	```
- Update one record
	```js
	// ...update 1 document that matches the query object criteria
	User.updateOne({name:'Bob Ross'}, {
	    name: 'Ross Bob',
	    $push: {pets: {name: 'Sprinkles', type: 'Chubby Unicorn' }}
	})
	    .then(result => {
	        // logic with result -- note this will be the original object by default!
	    })
	    .catch(err => res.json(err));
	```
- Alternative way to update a record
	```js
	User.findOne({name: 'Bob Ross'})
	    .then(user => {
	        user.name = 'Rob Boss';
	        user.pets.push({name: 'Sprinkles', type: 'Chubby Unicorn'});
	        return user.save();
	    })
	    .then(saveResult => res.json(saveResult))
	    .catch(err => res.json(err));
	```
- Validate for uniqueness before creating new DB entry
	```js
	User.exists({name: req.body.name})
	    .then(userExists => {
	        if (userExists) {
	            // Promise.reject() will activate the .catch() below.
	            return Promise.reject('Error Message Goes Here');
	        }
	        return User.create(req.body);
	    })
	    .then(saveResult => res.json(saveResult))
	    .catch(err => res.json(err));
	```


---

## Validations
- Your server/**user.model.js** file can look like this:
	```js
	// ------------------------------------------------Declarations
	const mongoose = require('mongoose');
	const UserSchema = new mongoose.Schema({
		name: String,
		age: Number
	})
	const User = mongoose.model('User', UserSchema);
	
	// ------------------------------------------------Export
	module.exports = User;
	```
- But if you want validations for each new user, you can use the following code as your server/**user.model.js** file:
	```js
	// ------------------------------------------------Declarations
	const mongoose = require('mongoose');
	const UserSchema = new mongoose.Schema(
		{
			first_name: {
				type: String,
				required: [true, "First name is required"],
				minlength: [6, "First name must be at least 6 characters long"]
			},
			last_name: {
				type: String,
				required: [true, "Last name is required"],
				maxlength: [20, "Last name must be at least 6 characters long"]
			},
			age: {
				type: Number,
				min: [1, "You must be at least 1 or older to register"],
				max: [150, "You must be at most 149 years old to register"]
			},
			email: {
				type: String,
				required: [true, "Email is required"]
		},
		{ timestamps: true }
	);
	const User = mongoose.model('User', UserSchema);
	
	// ------------------------------------------------Export
	module.exports = User;
	```
