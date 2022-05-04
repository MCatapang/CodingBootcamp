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
- A completed HTML using React would look like:
	```HTML
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Hello React</title>
	</head>
	<body>

		<div id="root">
			<h1>First React page rendering...</h1>
		</div>
		
		<!-- two `script` tags needed for React to render -->
		<script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>
		<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

		<script>
			// the line below is a method done using arrow notation that returns a new React element
			const App = React.createElement("h1", {}, "Our First React page has rendered");
			// the line below tells React to display our `App` component made above as a method within the element that has an id of `root`
			ReactDOM.render(App, document.getElementById("root"));
		</script>
	
	</body>
	</html>
```
