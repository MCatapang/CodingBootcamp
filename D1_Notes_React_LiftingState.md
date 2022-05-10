# Lifting State
---
```toc
```
---

## Defining "Lifting State"
- ==Lifting State==: The process of 'lifting' data to the components' nearest common ancestory when more than one **".jsx"** component needs to utilize the same constantly changing data (e.g., `state`)
	![Image](https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/lift-state-edit.png)


---

## Demonstration
- **"MessageForm.jsx"**
	```jsx
	import react, { useState } from 'react';
	
	
	const MessageForm = (props) => {
		const [msg, setMsg] = useState("");
		
		const handleSubmit = (e) => {
			e.preventDefault();
			props.onNewMessage(msg)
			// what should we do with the message?
		};
		
		return (
			<form onSubmit={ handleSubmit }>
				<h1>Set Message</h1>
				<textarea 
					rows="4"
					cols="50"
					placeholder="Enter your message here"
					onChange={ (e) => setMsg(e.target.value) }
					value={ msg }>		
				</textarea>
				<input type="submit" value="Send Message" />
			</form>
		);
	};
		
	export default MessageForm;
	```
- **"MessageDisplay.jsx"**
	```jsx
	import react, { useState } from 'react';
	
	const MessageDisplay = (props) => {
		return (
			<>
				<h1>Current Message</h1>
				<pre>{ props.message }</pre>
			</>
		);
	};
	
	export default MessageDisplay;
	```
- **"App.js"**
	```jsx
	import React, { useState } from 'react';
	import MessageForm from './Components/MessageForm';
	import MessageDisplay from './Components/MessageDisplay';
	    
	function App() {
		const [currentMsg, setCurrentMsg] = useState("There are no messages");
		return (
			<>
				<MessageForm />
				<MessageDisplay message={ currentMsg } />
			</>
		);
	}
		
	export default App;
	```