# Using React
---
##### Basics
- The general idea is to break down your DOM into a variety of components that have specific behaviors – which is how React works
	- E.g., if we have a form on our page, we may create a component just for that form
	- E.g., if we also have a navbar, we may also have a separate component for the navbar
- If we want to use React in an HTML, you need to include React scripts in our HTML.
	```html
	<script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>
	<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
	```
- A basic component can be made using `React.createElement`
	- It has 3 main parameters:
		1. What element we want to create (e.g., `h1`)
		2. Props (e.g., an empty object `{}`)
		3. The children we want to include within our first parameter (e.g., the things inside our `h1` element above like a string or more HTML elements like `<p>`)
	- One example of a component being made using `React.createElement` is:
		```js
		const myReactComponent = React.createElement("h1", {}, "I am creating my first React component")
		```
	- You can also create a nested React Component
		```js
		const myReactComponent = React.createElement(
			"div", 
			{}, 
			React.createElement("p", {}, "This element is nested")
		)
		```