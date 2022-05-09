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

## Form – Controlled Components
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


----

## Form – Conditional Rendering
- ==Conditional Rendering==: the rendering of an HTML element on client-side given the fulfillment of a certain set of conditions.
	- We can also include a message in our forms that displays during a certain set of conditions
		```jsx
		// "UserForm.jsx" with Validations
		import React, {useState} from 'react';
		
		const userForm = props => {
			const [username, setUsername] = useState("");
			const [email, setEmail] = useState("");
			const [password, setPassword] = useState("");
			const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
				// Created the state above
			
			const createUser = (e) => {
				e.preventDefault();
				const newUser = {username, email, password};
				console.log("Welcome", newUser);
				setHasBeenSubmitted(true);    // included a setState
			}
			
			const formMessage = () => {    // created the formMessage function
				if(hasBeenSubmitted) {
					return ("Thank you for submitting the form!");
				} else {
					return ("Welcome, please submit the form");
				}
			}
			
			return(
				<form onSubmit={ createUser }>
					<h3>{formMessage}</h3>    // showed formMessage in HTML
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
	- We can also utilize **Ternary Operators** as a better (**and more preferred**) way of conditionally rendering an element.
		```jsx
		// The rest of the code above removed for brevity
		
		<form onSubmit={createUser}>
			{
				hasBeenSubmitted ?
				<h3>Thank you for submitting the form!</h3> :
				<h3>Welcome, please submit the form.</h3>
			}
			<div>
				<label>Username: </label>
				<input type="text" onChange={ (e) => setUsername(e.target.value) }/>
			</div>
		</form>
		
		// The rest of the code below removed for brevity
		```
	- Conditional rendering is a good way to show validations
		```jsx
		const MovieForm = (props) -> {
			const [title, setTitle] = useState("");
			const [titleError, setTitleError] = useState("");
			
			const handleTitle = (e) => {
				setTitle(e.target.value);
				if(e.target.value.length < 1) {
					setTitleError("Title is required!");
				} else if (e.target.value.length < 3) {
					setTitleError("Title must be 3 characters or longer!");
				}
			}
			
			// rest of the component removed for brevity
			
			return (
				<form onSubmit={ (e) => e.preventDefault()} > // Not to Self: Why e.preventDefault()?
					<div>
						<label>Title: </label>
						<input type="text" onChange={handleTitle} />
						{
							titleError ?
							<h3>{titleError}</h3> :
							""
						}
					</div>
					<input type="submit" value="Create Movie" />
				</form>
			);
		}
		```