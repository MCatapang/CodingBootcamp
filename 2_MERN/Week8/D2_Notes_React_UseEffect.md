# useEffect()
---
```toc
```
---

## Defining useEffect
- ==`useEffect()`==: another hook that we can use in functional components in order to manage "side effects" in our React project
	- If used in a functional component, the method will execute directly after the component is rendered
	- Will also render every time the component updates
- A common way to utilize `useEffect()` is when making an API call 
	```js
	// "App.js"
	import React from 'react';
	
	const App = (props) => {
		const [people, setPeople] = useState([]);
		
		useEffect( () => {
			fetch('https://swapi.dev/api/people/')
				.then( response => response.json() )
				.then( response => setPeople(response.results))
		}, [] );    // `[]` is an optional second argument 
		
		return (
			<div>
				{people.length > 0 && people.map( (person, index) => {
					return (<div key={index}>{person.name}</div>)
				}) };
			</div>
		)
	}
	```
	- In the example above, you can see that `useEffect()` takes in an optional second argument
	- `useEffect()` will always run on the first render; it will also run when a variable in the second argument changes.
	- In the example above, the second argument is an empty array – therefore, it will never change again after the first render.


---
