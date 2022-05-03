# Arrow Functions
---
##### Benefits of Arrow Functions
- Functions can be concise and one-liners
	```js
	const sayHello = (name) => console.log('Hello ${name}')
	```
	- This is due to the removal of the [[#function Keyword]] and [[#return Keyword]].


##### `function` Keyword
- In arrow functions, the `function` keyword is ommitted.
	```js
	var sayHello = function(name) {
		console.log('Hello ' + name);
	}
	// will be refactored into...
	const sayHello = (name) => {
		console.log('Hello ${name}');
	}
	```


##### `return` Keyword
- Functions implicitly return; the `return` keyword is ommitted as well.
	```js
	var square = function(n) {
		return n*n;
	};
	// will get refactored into...
	const square = (n) => {
		n*n
	};
	// or, as a more concise refactoring, ...
	const square = (n) => n*n;
	```
- Take note of the syntax required to return an object:
	```js
	// the first set of brackets define the function body
	// the second set of brackets create the object literal
	const returnObjLonghand = () => {
		return {
			firstName: 'John';
			lastName: 'Wick';
		}
	}
	// when shorthanding it, however, you use a pair of parenthesis and brackets
	const returnObjShorthand = () => ({ firstName:'John', lastName:'Wick'});
	```


##### Context Inheritance (NOTES TAKEN WRONG?)
- As previously studied, **scope** is the "accessibility of information to a particular section of code" ([[D1_Notes_ArrowFunctions]]).
- Arrow functions allow you to inherit context from the parent scope so that you can access certain information within the child arrow function.
	- `this` in the traditional function below won't be able to access the `Deck` class because inside the `for` loop, `this` is locally defined so `this` refers to the loop
	```js
	class Deck {
	  constructor() {
	    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
	    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
	    const deck = [];
	    for (const suit of suits) {
	      for (const face of faces) {
	        deck.push(this.createCard(suit, face));
	      }
	    }
	    this.deck = deck;
	  }
	}
	let newDeck = new Deck();
	//TypeError: Cannot read property 'createCard' of undefined
	```
	- `this` in the arrow function below, however, is able to inherit context from the parent scope. As such, `this` now refers to the (`Deck` class / instance of `Deck` class?)
	```js
	class Deck {
	  constructor() {
	      const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
	      const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
	      const deck = [];
	      suits.forEach(suit => {
	      faces.forEach(face => {
	        deck.push(this.createCard(suit, face));
	      });
	    });
	    }
	}
	```