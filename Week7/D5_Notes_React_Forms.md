# Forms
---
```toc
```
---

## Ways to Utilize Forms in React
1. `state`: track input values as a piece of your state, updating them on change events and rendering them back out to the UI. 
	- These are **controlled components**.
	- Controlled components are preferred due to how it allows React to continue to sit between us and the actual `DOM`
2. `refs`: attach a pointed to `DOM` nodes like inputs and textareas and reach out to inspect their values once our form is submitted
	- These are **uncontrolled components**.


---

## Controlled Components
- An example of a controlled component utilizing a form is shown below:
	```jsx
	// "UserForm.jsx"
	import React, {useState} from 'react';
	
	const userForm = props => {
		const [username, setUsername] = useState("");
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		
		const createUser = (e) => {
			e.preventDefault();
			const newUser = {username, email, password};
			console.log("Welcome", newUser);
		}
		
		return(
			<form onSubmit={ createUser }>
				<div>
					<label>Username: </label> 
					<input type="text" onChange={ (e) => setUsername(e.target.value) } />
				</div>
				<div>
					<label>Email Address: </label> 
					<input type="text" onChange={ (e) => setEmail(e.target.value) } />
				</div>
				<div>
					<label>Password: </label>
					<input type="text" onChange={ (e) => setPassword(e.target.value) } />
				</div>
				<input type="submit" value="Create User" />
			</form>
		);
	};
	
	export default UserForm;
	```

### `onChange`
- The event is run whenever the value in the input is changed
- When we use it, we need to accept a parameter into our function (e.g., `e`)
	- `e.target`: the "target" of the event (i.e., the `<input />` element)
	- `e.target.value`: the information currently typed into the input

### `onSubmit`
- The event is run when the user submits the form by clicking on the "submit" button
- Like `onChange`, it will also need to accept an `e` parameter full of **e**vent information
- This time, we want to prevent the default form behavior by using `e.preventDefault()`
	- The default form behavior is refreshing the webpage after submitting the information to the route in the `action`;
	- Since there is no page load happening thanks to `preventDefault()`, the input values linger in the form even after being submited.
		- We can change this by including a `value` attribute in each of the input elements
			```jsx
			<input type="text" onChange={ (e) => setUsername(e.target.value) } value={ username } />
			```
		- After changing the above, we can now also set `username` back to an appropriate starting value
			```jsx
			const createUser = (e) => {
				e.preventDefault();
				const newUser = {username, email, password};
				console.log("Welcome", newUser);
				setUsername(""); // setting the username back(?)
			}
			```

### `createUser`
- When the `onSubmit` event occurs, the `createUser` function is called. 
	- Utilizing the function, the form data for each input is being held in `state` using separate `hooks`
	- If we want to bring all the fields together, we can create an object with them in it
		e.g., `const newUser = {username, email, password};`