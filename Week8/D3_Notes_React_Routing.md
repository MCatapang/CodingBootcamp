# Routing
---
```toc
```
---

## Traditional Web Server vs. SPA
- The anatomy of a URL is as follows:
	![Anatomy of a URL](https://s3.us-east-1.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/1629146044__route-anatomy.png)
	- In terms of our projects, the **routes** are equivalent to the **path** seen above
- **Traditional Web Servers** receive a required whenever we type a URL into our browser's address bar and press enter;  with **Single Page Applications**, no requests will be sent to the server.
- With **React** and our **SPAs**, routes will be used to manipulate the DOM to swap out components


---

## React Router
- ==React Router==:  the most popular library for introducing routes into our React project
	- We will need to add this as a dependency for each project that needs routing.

### Installation
1. Run `npm install react-router-dom@5` inside your **project-folder**.
2. Modify your **App.js**
	```js
	import React from "react";
	import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
	    
	const Home = (props) => {
	  return ( <h1 style={{color: "red"}}>Home Component</h1> );
	}
	    
	const About = (props) => {
	  return ( <h1 style={{color: "blue"}}>About Component</h1> );
	}
	    
	const App = () => (
		<BrowserRouter>
		  <h1>Routing Example</h1>
		  <p>
			<Link to="/">Home</Link>
			 | 
			<Link to="/about">About</Link>   
		  </p>
		  <Switch>
			<Route path="/about" element={<Component/>}>
			  <About />
			</Route>
			<Route exact path="/about/:parameter1" element={<Component/>}>
			  <Home />
			</Route>
		  </Switch>
		</BrowserRouter>
	)
	    
	export default App;
	```
	- ==`BrowserRouter`==: wraps around all of the components we want to be aware of our current route.
		- Will enable use to work with the history of which routes our users have visited on our site.
			- You can also wrap your `<App />` component  with `<BrowserRouter> </BrowserRouter>` in **index.js**
	- ==`Link`==: enables us to change the URL to what we specify in the `to` prop without causing the page to refresh as traditional anchor tags would
		- e.g., clicking the links can change the URL from http://localhost:3000/ and  http://localhost:3000/about and back without causing page reload
		- instead of `href`, `Link` utilizes `to` (e.g,, `to='/about'`)
		- `to` must match `path` in `Route`
	- ==`Switch`==: changes the component being displayed based on the route
		- **IMPORTANT**: in the newest version of React, this is called ==`Routes`==
	- ==`Route`==: components that will match the URLs using its ==`path`== prop
		- Displays its content only if the prop matches
		- `exact path` is utilized for routes that utilize only "`/`" as its path due to how just using `path` would allow the route's component to render on any path that has "`/`" in it.
		- `path` must match `to` in Link
	- `Element` for each `Route` tag refers to the target Component
1. Modify your **Component.jsx** as needed:
	```jsx
	import React from "react";
	import {useParams} from 'react-router-dom';
	
	const Input = (props) => {
		const {input, color, backgroundColor} = useParams();
		
		if(isNaN(+`${input}`)) {
			return (
					<h1 style={{color: color, backgroundColor: backgroundColor}}>
						The word is "{input}"
					</h1>
			)
		} else {
			return (
				<h1 style={{color: color, backgroundColor: backgroundColor}}>
					The number is "{input}"
				</h1>
			)
		}
	}
	
	export default Input;
	```
	- Utilize `useParams()` if needed