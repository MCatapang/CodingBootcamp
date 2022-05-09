# State and SetState
---
```toc
```
---
## Defining State
- ==`state`==: a variable that alllows components in React to hold onto their own information
- e.g., a light switch
	```js
	// component.jsx
	import React, { Component } from 'react';
	
	class LightSwitch extends Component {
		constructor(props) {
			super(props);
			this.state = {    // now this `LightSwitch` class component
				position: "On";    // is able to store its own information
			};
		}
		
		render() {
			return (
				<fieldset>
					<p>The light is currently {this.state.position}</p>
					<button>Flip Switch</button>    // This button won't do
				</fieldset>    // anything yet... more on that later
			);
		}
	}
	```


---

## Defining SetState
- ==`setState()`==: a method to change `state`
	- Reassignment of `state` is not quite possible in React; you cannot change state by typing `this.state.position = "Something Else"`
		- This is due to how React wants developers to treat `state` as immutable
	- As such, `setState()` is utilized to change `state`
```js
// component.jsx
import React, { Component } from 'react';

class LightSwitch extends Component {
	constructor(props) {
		super(props);
		this.state = {  
			position: "On"; 
		};
	}
	
	flipSwitch = () => {    // Created a `flipSwitch` class method
		if(this.state.position == "On") {
			this.setState({position: "Off"});
		}
		else {
			this.setState({position: "On"});
		}
	}
	
	render() {
		return (
			<fieldset>
				<p>The light is currently {this.state.position}</p>
				<button onClick={this.flipSwitch}>Flip Switch</button> 
				// this button above now calls on the `flipSwitch` method
				// to change the `state` using `setState`
			</fieldset>    
		);
	}
}
```