# CallBack Functions
---
```toc
```
---

## Callback Functions – 1
- ==Callback Functions==: a function that is passed into another function to be called by that function
	```js
	setTimeout( function(){console.log("start")}, 3000);
	console.log("end");
	```
	- In the example above, the first parameter (`function(){console.log("start")}`) is the function we want to be called after a delay in miliseconds represented by the second parameter (`3000`)


---

## Callback Functions – 2
- In JavaScript, functions are treated just like any other variable type
	```js
	typeof( "hello" ); // 'string'
	typeof( function() ); // 'function'
	```
- We can declare a variable and set it equal to a function; we can also call the function by invoking the function name
	```js
	const exampleFunction = function(message) {
		console.log(message);
	}
	exampleFunction("Wassup buddy");
	```
- We can also pass a function as a parameter into some parent function
	```js
	const exampleFunction = function(message) {
		console.log(message);
	};
	function parentFunction(callback) {
		callback("information from the parent function");
	};
	
	// function call
	parentFunction(exampleFunction);
	```