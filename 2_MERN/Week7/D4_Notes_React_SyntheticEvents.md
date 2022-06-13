# Synthetic Events
---
```toc
```
---

## Defining Synthetic Events
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