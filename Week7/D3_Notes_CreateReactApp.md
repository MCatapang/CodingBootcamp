# Create React App
---
## Defining Bundlers
- **Bundlers**: used by modern JavaScript projects to "build" source code into production-ready files
	- **Webpack**: one fo the most popular bundlers that breaks down apps into smaller modules


## Defining `create-react-app`
- `create-react-app` is a starter kit that utilizes Webpack under the hood; `create-react-app` will be utilized instead of Webpack for the MERN stack of the bootcamp


## Using `create-react-app`
1. Enter `npx create-react-app your-project-name-here` as a command in your terminal
2. Navigate into your project folder using `cd` 
3. Run `npm start` 
	- This will run the React development server
	- It will also automatically open up a browser tab navigated to our app
	- Since this starter kit comes with a live reload feature, it will reload our app every time we save changes in our code


## React Folder Structure
-  The folder structure for our React app as given by the webkit is as follows: ![Folder Structure|400](https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/react-project-structure.PNG) 
	- Make sure to add a folder `my-first-project/src/components`
		- All components will be placed inside this folder
		- You can think of a component as a `div` that contains all of the styling and JavaScript that it needs
- `src/index.js` is the entry point in our React project
	- This is where we call `ReactDOM.render` and send in our main `<App />` component
- `<App />`  is our main component that will contain out of our React code inside the `div` with `id=root`
- `src/App.js` will be where we can actually point the rest of our code towards
	- The code for `src/App.js` is:
	```js
	import React from 'react'; // the main import we need; by importing React, we are able to write in JSX
	import logo from './logo.svg';
	import './App.css';
	 
	function App() {
	  return (
		<div className="App">
		  <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			  Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			  className="App-link"
			  href="https://reactjs.org"
			  target="_blank"
			  rel="noopener noreferrer"
>		
			  Learn React
			</a>
		  </header>
		</div>
	  );
	}
	export default App;
	```
	- If you navigate to your project and run `npm run start` in your terminal, `src/App.js` will display in the browser
	- However, we don't need this code for our project to work; we can delete everything within the `<div className="App">`
