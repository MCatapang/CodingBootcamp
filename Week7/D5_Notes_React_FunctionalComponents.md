# Functional Components
---
```toc
```
---

## Context
- Using React, we can build components as either **classes** or **functions**
	- Historically, **class components** have been the way to go due to robustness and the ability to handle `state`
	- On the other hand, **functional components** did not have state directly tied to them 
- With the creation of **hooks**, we can now access component `state` in a functional component
	- Functional components have slowly overtaken class components
	- Most new React code will likely use functional components. But, React code can still run on either, or both at the same time.
	- However, it's still important to learn about class components due to how many existing codebases will still use class components


---

## Defining Functional Component
- ==Functional Component==: a component that consists of functions instead of classes, dissimilar to Class Components
	```js
	// "PersonCard.js"
	import React from 'react';
	
	const PersonCard = props => {
		return(
			<div>
				<h1>{props.lastName}, {props.firstName}</h1>
				<p>Age: {props.age}</p>
				<p>Hair Color: {props.hairColor}</p>
			</div>
		);
	}
	
	export default PersonCard;
	```
- The functions inside of a functional component are **arrow functions** that take **props** as arguments.
	- As such, we can still utilize **props** in our **"App.js"** in order to render components with different values.
	```js
	// "App.js"
	<PersonCard firstName="John" lastName="Smith" age={8} hairColor="Brown" />
		// Note: we can pass strings without curly braces
	```