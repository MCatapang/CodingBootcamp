# useReducer
---
```toc
```
---

## Context
- So far, we've been working on simple state (and updating it on the granular level using the `useState` hook).
- However, if we want to have complex state similar to what we can achieve with class components, we can use `useReducer`
- We can create complex state and manage it like how you would with Redux
	- ==Redux==: a popular state-management library


---

## Using useReducer
- Your **"App.js"** would look like:
	```js
	import React, {useReducer} from 'react';    // import useReducer
	
	const reducer = (state, action) {    // a reducer function that takes `state` an action object (e.g., action)
		return {    // returns a NEW state object using the given arguments
			...state, 
			[action.type]: action.payload
		}
	}
	
	const initialState = {    // create an `initialState` object with 2 keys
		name: '',
		email: ''
	}
	
	export default () => {
		const [state, dispatch] = useReducer(reducer, initialState);
		// the line above invokes the useReducer function by passing in
		// our `reducer` function and `initialState` object
		
		function handleChange(e) {    // a function that takes in an event
			const {name, value} = e.target;    // destructure name and value
			dispatch({    // we use the `dispatch` function returned by the `useReducer` function
				type: name,    // we pass in an object with a `type` and `payload`
				payload: value    // name == input name; payload == input value
			});
		}
		
		return (
			<div>
				{JSON.stringify(state)} // used to easily keep track of state
				<div>
					<label>
						<span>Name:</span>{'  '}
						<input 
							name="name" 
							value={state.name}  // value is == state.name
							onChange={handleChange} /> // on change, `handleChange` function is triggered
					</label>
				</div>
				<div>
					<label>
						<span>Email:</span>{'  '}
						<input 
							name="email" 
							value={state.name} //
							onChange={handleChange} />
					</label>
				</div>
			</div>
		);
	}
	```