# React
---
```toc
```

## Defining React
- **==React==**: a JavaScript library for building user interfaces
- It's the code that'll be ran on our user's browser
	- Displays the information we want users to see
	- Reacting to user input
	- Being responsible for most of the interactivity
- An open-source project maintained by Facebook, released under the permissive MIT license
- One of the most popular front end libraries being used today


## Why Learn React
- ==Single Page Application (SPA)==: a web app consisting of one webpage that dynamically changes
	- React can be used to build an SPA
- React isn't opinionated about what technology we use it with
	- We can choose the library for https requests
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
	- This is not quite used  in the [[#React App Creation Utilizing JSX]] section below due to the usage of `npx create-react-app`
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


## React App: Parts
### "components"
- A basic component can be made using `React.createElement`
	- It has 3 main parameters:
		1. What element we want to create (e.g., `h1`)
		2. Props (e.g., an empty object `{}`)
		3. The children we want to include within our first parameter (e.g., the things inside our `h1` element above like a string or more HTML elements like `<p>`)
- E.g., Components with  `React.createElement`
	```js
	// "ReactComponent.jsx" in the simplest form
	const myReactComponent = React.createElement("h1", {}, "I am creating my first React component");
	```
	```js
	// "ReactComponent.jsx" with nested `React.createElement()`
	const myReactComponent = React.createElement(
		"div", 
		{}, 
		React.createElement("p", {}, "This element is nested")
	);
	```
- E.g., Components with JSX (preferred)
	```js
	// "ReactComponent.jsx" with JSX
	import React, { Component } from 'react';
	
	class MyNewComponent extends Component{
		render() {
			return(
				<div>
					We are in MyNewComponent!
				</div>
			);
		}
	}
	
	export default MyNewComponent;
	```
	```js
	// "ReactComponent.jsx" with JSX & Props
	import React, { Component } from `react`;
	
	class MyNewComponent extends Component{
		render() {
			return (
				<div>
					<h1>This is {this.props.myPropName} for this example</h1>
					<h1>Seems like {this.props.anotherPropName}!</h1>
				</div>
			);
		}
	}
	
	export default MyNewComponent;
	```
	```js
	import React, { Component } from 'react';
	    
	class MyNewComponent extends Component{
	    render() {
	        return(
	            <div>
	                <h1>{this.props.header}</h1>
	                {this.props.children}
	            </div>
	        );
	    }
	}
	    
	export default MyNewComponent;
	```

### "App.js"
- "App.js" is automatically installed with `npx create-react-app`
- E.g.,  "App.js" basic formatting
	```js
	// "App.js" with a function returning a component
	import React from 'react';
	import './App.css';
	import MyNewComponent from './components/MyNewComponent';
	
	function App() {
		return (
			<div>
				<MyNewComponent />
			</div>
		);
	}
	
	export default App;
	```
	```js
	// "App.js" with a function returning a component & props
	import React from 'react';
	import './App.css';
	import MyNewComponent from './components/MyNewComponent';
	
	function App() {
		return (
			<div>
				<MyNewComponent myPropName={"what I want my prop to be"} another PropName ={"life is good"}/>
			</div>
		);
	}
	
	export default App;
	```
	```js
	// "App.js" with a function returning component & props, with children elements that do not change created for the component 
	import React from 'react';
	import './App.css';
	import MyNewComponent from './components/MyNewComponent';
		
	function App() {
	  return (
		<div>
			<MyNewComponent myPropName={"what I want my prop to be"}>
				<p>This is a child</p>
				<p>This is another child</p>
				<p>This is even another child</p>
			</MyNewComponent>  
		</div>
	  );
	}
	
	export default App;
	```


### Synthetic Events
- ==**Synthetic Events**==:  React's event system similar to JavaScript's event listeners
- There are a couple of things to keep in mind about React's synthetic event system:
	1. Event names are camelCased (e.g., `onClick` with React, – not `onclick` like in JavaScript)
	2. Returning false will not work; you need to manually call `even.stopPropagation()` or `event.preventDefault()` 
	3. Events cannot be called asynchronously because of how React "pools" the Synthetic events
- Some kinds of synthetic events include:
	- `onChange`: an event that runs when a form input is changed
	- `onSubmit`: an event that runs when a form is submitted
	- `onFocus`: an event that is run when an element is given focus (clicked on or tabbed to)
	- `onBlur`: an even thtat is run when an element loses focus (the user clicked away)
	- Etc. (more info on [reactjs.org](https://reactjs.org/docs/events.html#supported-events))
- E.g., "App.js" with a synthetic event:
	```js
	// "App.js" with a synthetic event
	import React from 'react';
	import './App.css';
		
	function App() {
	  return (
		<button onClick={ () => alert("This button has been clicked!") }>
			Click Me!
		</button>
	  );
	}
	
	export default App;
	```


## React App: Walkthrough
### Creation (Utilizing JSX)
1. Point your terminal in your target folder where you want to create your project folder, and run `npx create-react-app your-project-name-here` as a command in your terminal
	-==`create-react-app`== is a starter kit bundler that utilizes Webpack under the hood; 
		- **Bundlers**: used by modern JavaScript projects to "build" source code into production-ready files
		- **Webpack**: one fo the most popular bundlers that breaks down apps into smaller modules
	-  The folder structure for our React app as given by the webkit is as follows: ![Folder Structure|400](https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/react-project-structure.PNG) 
	- `src/index.js` is the entry point in our React project
		- This is where we call `ReactDOM.render` and send in our main `<App />` component
2. Create your components
3.  Modify your "App.js" located at `project-name-here/src` accordingly

### Deployment
1. Run `npm start`  in Terminal
	- This will run the React development server
	- It will also automatically open up a browser tab navigated to our app
	- Since this starter kit comes with a live reload feature, it will reload our app every time we save changes in our code
2. Stop deployment once finished by pressing `cmd` + `c` on your keyboard while in the Terminal

### Deleting and Reinstalling "node_modules"
- Whenever you're not actively working on a  React project, it's highly recommended that you uninstall "node_modules"
	- To uninstall, use `rm -rf node_modules`
		- `rm` is a command used to remove a file
		- `-r` is an argument that tells the remove command to delete files and directories
		- `-f` is an argument that bypasses the need for user confirmation for every `-r` delete that will happen
		- `node_modules` is the "node_modules" that we want to delete in order to save space
			- **Note**: make sure that you are deleting a specific folder; if you type in `/` it'll delete your **entire system** so **be very careful when using this command**
	- "node_modules" is an entire library consisting of hundreds of open-source code
	- It's important to uninstall "node_modules" so that local storage is not being used up when you're not running your app
- When you do want to run your React app, you will want to reinstall "node_modules" using `npm install` 
	- If you try to run `npm start` you'll get a couple errors that prevents you from running your React app
	- This is due to how your React app won't be able to source the modules it needs from "node_modules" since "node_modules" haven't been reinstalled yet (it's still missing from your React app)