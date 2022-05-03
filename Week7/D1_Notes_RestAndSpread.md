# Rest / Spread
---
##### The `...` Operator
- ES6 provides us with the operator, `...`, which is context dependent.
- It can either:
	- Capture the `rest` of a data set; or
	- Get the contents of a data set to `spread`.



##### The `rest` Operator
- Typically used as a parameter to denote the rest of a data set
	- e.g., 
	```js
	function numberTeller(a, b, ...args) {
		console.log(args); // 3,4,5
	}
	numberTeller(1,2,3,4,5);
	```
- Can be used to access the remainder of an object's property
	```js
	// In our person object...
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

	// We can assign properties to a 'catchall' using the rest operator
	const { firstName, lastName, ...otherWhatevers} = person;
	// Where otherWhatevers will catch all of the remaining properties thanks to the rest operator. So if we console.log otherWhatevers...
	console.log(otherWhatevers) // it'll log the password, username, addresses, and createdAt properties.
	```
- Must be the last parameters of a function. ([source](https://www.javascripttutorial.net/es6/javascript-spread/))


##### The `spread` Operator
- Used in order to spread the data from a dataset (i.e., access multiple data from a data set)
	- e.g., 
	```js
	const odd = [1,3,5];
	const evenAndOddUnordered = [2, ...odd, 4, 6]
	// and when console.logged
	console.log(evenAndOddUnordered); // 2,1,3,5,4,6
	```
- Can also be used to make complete copies of objects or arrays
	- e.g.,
	```js
	// our person object
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
	// using spread to quickly make a complete *copy* of our person object
	const personCopy = { ...person };
	// where...
	personCopy === person; //false
	personCopy.addresses === person.addresses;
	```