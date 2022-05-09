# Fundamentals
---
```toc
```
---

## Defining React
- ==React==: a JavaScript library for building user interfaces
- It's the code that'll be ran on our user's browser
	- Displays the information we want users to see
	- Reacting to user input
	- Being responsible for most of the interactivity
- An open-source project maintained by Facebook, released under the permissive MIT license
- One of the most popular front end libraries being used today


## React vs. Other Front-Ends
- ==React==: a **library / framework** created by Facebook
	+ can be plugged in to any other framework
	+ built on the idea of components
		+ ==Components==: modularized parts of a website that are broken up in order to achieve a more organized code base
	+ written in JavaScript and JSX
	+ does not come with a router; you will need a third part router
- ==Angular==: full-fledged **framework** that comes with a very comprehensive command line interfact
	+ dictates the structure of your app
	+ like React, works using components
		+ differs with how Angular uses Typescript to write most of the programming logic
	+ comes with a router
	+ learning curve is much steeper than React's, but Angular is more powerful
+  ==JQuery==: a JavaScript **library** 
	+ succinct code that changes the DOM for increase interactivity


## Why Learn React
- React can be used to build an SPA
	- ==Single Page Application (SPA)==: a web app consisting of one webpage that dynamically changes
- React isn't opinionated about what technology we use it with
	- We can choose the library for `https` requests
	- We can choose the library for front-end routing
	- We can choose the library for styling
	- Etc.
- React doesn't prevent us from using DOM manipulation already built into JavaScript
- React is popular
	- React has more weekly downloads on NPM for React than for Angular or Vue


## General Concepts
- The general idea is to break down your DOM into a variety of components that have specific behaviors – which is how React works
	- E.g., if we have a form on our page, we may create a component just for that form
	- E.g., if we also have a navbar, we may also have a separate component for the navbar
- If we want to use React in an HTML, you need to include React scripts in our HTML.
	```html
	<!-- REACT SCRIPT IN HTML -->
	<script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>
	<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
	```
	- This is not usually used in React projects due to the usage of `npx create-react-app`
- A completed HTML using React would look like:
	```html
	<!-- COMPLETE BASIC HTML WITH REACT -->
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





