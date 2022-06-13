# useState
---
```toc
```
---

## Hooks: useState (1)
- ==Hooks==: Generally speaking, a function – either built-in or custom – that allows you to "hook" in or use a certain piece of functionality.
	- E.g., in a **class component**, `.setState()` allows us to alter `this.state`; in a **functional component**, ==hooks== allow us to define and set the `state`
	- In a **functional component**, we have `state` and `setState` variables by  utilizing  `useState` 
	```js
	// Component.jsx
	import React, {useState} from 'react';
	
	const Counter = props => {
		const [state, setState] = useState({
			clickCount: 0
		})
		const handleClick = () => (
			setState({
				clickCount: state.clickCount + 1
			})
		)
		return(
			<div>{state.clickCount}</div>
		)
	}
	
	export default Counter;
	```


---

## Hooks: useState (2)
- When invoking `useState`, we do not need to pass in an object; we can just pass in a primitive value and then update it accordingly.
	- This is a more common form that you'll see being utilized
	```js
	// "Component.jsx"
	import React, {useState} from 'react';
	
	const Counter = props => {
		const [count, setCount] = useState(0);
		const handleClick = () => (setCount(count + 1)) ;
		return (
			<div>
				{count}
				<button onClick={handleClick}>Click Me!</button>
			</div>
		);
	}
	
	export default Counter;
	```


---
