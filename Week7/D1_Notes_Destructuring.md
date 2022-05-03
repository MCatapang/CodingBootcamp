# Destructuring
---
##### Defining Destructuring
- **Destructuring**: "destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables."
	- i.e., you havae a data structure (e.g., array or object), and you want information to be its own variable.
- For example:
	```js
	// The data in our initial data structures...
	const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
	};
	const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
	// ... can be accessed before ES6 through:
	var email = person.email;
	var password = person.password;
	var firstAnimal = animals[0];
	var secondAnimal = animals[1];
	var thirdAnimal = animals[3];
	// ... but with ES6 and destructuring are accesed through:
	const {email} = person; // 'bob@marley.com'
	const {password} = person; // 'sekureP@ssw0rd9'
	const [firstAnimal, secondAnimal, thirdAnimal] = animals; // 'horse', 'dog', 'fish'
	```
- As seen in the example above with `const [firstAnimal, secondAnimal, thirdAnimal]`, we can extract multuple items at once with destructuring


##### Name Conflicts
- There will be name conflicts if your current scope already has a variable possessing the same name as a property that you're trying to extract from an object. However this can be fixed:
	- The example below:
		```js
		const password = '12345';
		const {password} = person;
		// SyntaxError: Identified 'password' has already been declared
		```
	+ Can be refactored into:
		```js
		const password = '12345';
		const {password: hashedPassword} = person;
		// hashedPassword is the new key name for password in our object
		// hashedPassword will get assigned a value of undefined
		// hashedPassword is now a variable that contains the value from the key-value pair in our person object
		```


##### Nested Destructuring
- Content will often be much more complex and destructuring will look more complex as a result.
	- In the example below:
		```js
		const person = {
		  firstName: 'Bob',
		  lastName: 'Marley',
		  email: 'bob@marley.com',
		  password: 'sekureP@ssw0rd9',
		  username: 'barley',
		  addresses: [
		    {
		      address: '1600 Pennsylvania Avenue',
		      city: 'Washington, D.C.',
		      zipcode: '20500',
		    },
		    {
		      address: '221B Baker St.',
		      city: 'London',
		      zipcode: 'WC2N 5DU',
		    }
		  ],
		  createdAt: 1543945177623
		};
		```
	- We can create individual variables for each respective address by doing:
		```js
		const {addresses: [whiteHouse, sherlockHome]} = person;
		// and if we console log them...
		console.log(whiteHouse);
		/*
		{
		      address: '1600 Pennsylvania Avenue',
		      city: 'Washington, D.C.',
		      zipcode: '20500',
		    }
		*/
		console.log(sherlockHome);
		/*
		{
		      address: '221B Baker St.',
		      city: 'London',
		      zipcode: 'WC2N 5DU',
		    }
		*/
		```
	-  But if you only want to deconstruct the second address value asscoiated with our `addresses` key, you can do:
		```js
		const {addresses: [, {address: baketyBakeBakes}]} = person
		// and if we console.log it...
		console.log(baketyBakeBakes); // 221B Baker St.
		```