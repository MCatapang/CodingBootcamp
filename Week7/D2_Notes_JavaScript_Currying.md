# Currying
---
```toc
```
---

## Defining Currying
- ==Currying==: the idea that you only run part of a function, rather than the whole thing.
	- E.g., **Uncurried**
	```js
	function ninjaBelt(ninja, beltColor) {
		console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
	}
	ninjaBelt('Eileen', 'black');
	// output: "Ninja black has earned a Eileen belt."
	```
	- E.g., **Curried**
	```js
	function ninjaBelt(ninja) {
		return function belt(beltColor) {
			console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
		}
	}
	ninjaBelt('Eileen')('black');
	// output: "Ninja black has earned a Eileen belt."
	```