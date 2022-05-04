# JSX && Babel
---
##### Defining JSX 
- **JSX**: (JavaSdcript XML) A syntax extension of JavaScript that allows us to directly write HTML in React within JavaScript code
	- JSX can't be interpreted out of the box
	- We need to use a transpiler like Babel


##### Defining Babel
- **Babel**: a transpiler that turns JSX into JavaScript that browsers can understand


#####  JSX vs. Babel
- Raw JavaScript:
	```js
	const App = () => {
		return React.createElement("h1", {}, "Our First React page has rendered");
	}
	ReactDom.render( App(), document.GetElementByID("root") );
```
- JSX -> Babel -> JavaScript
	```js
	ReactDOM.render(
		<h1>Hello!</h1>, 
		document.getElementById("root") 
	);
	ReactDOM.render(
		React.createElement(
			"h1", 
			null, "
			Hello World"
		), 
		document.getElementById("root") 
	);
```
- JSX
	```js
	const App = () => <h1>Our First React page has rendered</h1>;
	ReactDOM.render(<App></App>, document.getElementById("root"));
```