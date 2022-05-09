# "Component.jsx" and "App.js"
---
```toc
```
---

## "components"
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
		render() { return(
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
	import React, { Component } from 'react';
	
	class MyNewComponent extends Component{
		render() {return (
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


---

## "App.js"
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




