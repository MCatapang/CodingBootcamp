# Debugging
---
```toc
```
---

## Node.js
- ==Node.js==: a powerful and flexible JavaScript interpreter
	+ Uses the computer's native hardware to run JavaScript code
	+ Browsers area able to run JavaScript due to how they have interpreters; Node.js allows us to run JavaScript without a browser
- Node.js allows us to run – and therefore, **debug** – JavaScript code without needing a browser


---

## JavaScript Errors
- JavaScript runs in two parts:
	1. Parsing
	2. Code Execution
- As such, JavaScript errors typically come in two ways:
	1. [[#Syntax Errors]]
	2. [[#Runtime Errors]]

### Syntax Errors
==- Syntax Errors==: happens when the parser finds invalid JavaScript
- e.g.,
	```js
	let x = 1;
	let y = 2;
	let z == 3;    // syntax error because of "==""
	console.log(x + x);
	console.log(y - z);
	console.log(z * x);
	```
	- the `console.log`s never fired because the syntax error killed our app before it even started
- syntax errors show the *line the parser errored on*; the issue happened somewhere before that line and *not necessarily* that specific line

### Runtime Errors
- ==Runtime Errors==: happens when the code successfully parses and the error happens while the program is running
- also called ==bugs==
- often because of faulty logic or improperly-written code