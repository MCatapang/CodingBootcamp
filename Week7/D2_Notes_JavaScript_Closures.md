# Closure
---
```toc
```
---

## Defining Closure
- ==Closure==: a function that is returned from another function
	```js
	function outer() {
		let count = 0;
		function inner() {
			count++;
			console.log(count);
		}
		return inner;
	}
	const counter = outer();
	counter();    // output: 1
	counter();    // output: 2
	counter();    // output: 3
	counter();    // output: 4
	```