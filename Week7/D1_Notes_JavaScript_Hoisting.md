# Hoisting
---
```toc
```

---

## Hoisting
- JavaScript runs by (1st) parsing the code to make sure it's syntactically correct, then (2nd) executing the code. ([[D1_Notes_JavaScript_Debugging]])
- Before executing the code, JavaScript first ==hoists== certain parts of the code as part of its parsing


### Hoisting with `var`
- `var` s and functions are hoisted (i.e., brought up) to the top of the code block for interpretation; `console.log()`, function calls, and declarations (e.g., `oneVariable = 69`) is left where they are.
	- For example, the code below:
	```js
	console.log(magicalUnicorns);
	var magicalUnicorns = "awesome);"
	```
	- Will be interpreted by JavaScript as:
	```js
	var magicalUnicorns; // variable is hoisted at the top
	console.log(magicalUnicorns); // logged as undefined
	magicalUnicorns = "awesome"; // the assignment stays where it was
	```
	- With both `console.logs`s returning a `ReferenceError` due to how we attempted to log `magicalUnicorns` before a value was assigned to it.
	- Note that declarations (e.g., `oneVariable = 69`) are not hoisted and are left where they are due to how `=` acts as an anchor


### Hoisting with `let` and `const`
- Like `var`, `let` and `const` variables get hoisted
- Unlike `var`, `let` and `const` variables are not initialized with `undefined`; they don't have to be initialized during declaration