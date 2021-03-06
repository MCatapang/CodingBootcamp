# Ternary Operator
---
```toc
```
---

## Defining Ternary Operators
- ==Ternary Operator==: the only JS operator that takes three operands 
	- Composed of a condition followed by a question mark(`?`), then an expression to execute if the condition is truthy followed by a colon (`:`), and finally the expression to execute if the condition is falsy. 
	```js
	const test = (a,b) =>
		(a > b) ?
		console.log(`${a} is greater than ${b}`) :
		console.log(`${a} is less than ${b}`);
	```
- Frequently used as a shortcut for `if` statements


---

## Converting `if` Statements to Ternary Statements
- We can apply the basic syntax `var variableName = (condition) ? "What will return if true" : "What will return if false";` to convert `if` statements
	- For example:
	```js
	let canAfford = (itemPrice, accountBalance) => {
		if(itemPrice > accountBalance) {
			return "Cannot afford! You are $${itemPrice - accountBalance} short";
		}
		else {
			return "Can afford!";
		}
	}
	```
	- Can be converted into:
	```js
	let canAfford = (itemPrice, accountBalance) => {
		return (itemPrice > accountBalance)
			? "Cannot afford! You are $${itemPrice - accountBalance} short"
			: "Can afford!";
	}
	```