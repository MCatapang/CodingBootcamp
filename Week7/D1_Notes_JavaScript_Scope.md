# Scope
---
```toc
```
---

## Defining Scope
+ ==Scope==: the accessibility of information (e.g., variables and functions) to a particular section of code
+ e.g., ![Examples of Scope](https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/identify-scopes.png) 

### Types of Scope
- ==Global Scope==: allows information to be omnipresent within a JavaScript file
- ==Local Scope==: restricts information to only a specific function
- ==Block Scope==: restricts information to only a specific code block


---

## `const` and `let` 
- Both of them:
	- utilize Block Scope 
- But they differ in:
	- `let` allows for reassignment, and does not require a value upon declaration
	- `const` does not allow reassignment (i.e., immutable), and requires a value upon declaration
- For example:
	- The function below:
	```js
		function actuallyPrintingNames() {
		  for (let index = 0; index < names.length; index++) {
		    let name = names[index];
		    console.log(name + ' was found at index ' + index);
		  }
		  console.log('name and index after loop is ' + name + ':' + index);
		}
	```
	- Can be refactored into:
		```js
		function printNames(names) {
		  function actuallyPrintingNames() {
			for (let index = 0; index < names.length; index++) {
			  const name = names[index];
		  
			  console.log(name + ' was found at index ' + index);
			}
		  }
		  actuallyPrintingNames();
		}
		```
