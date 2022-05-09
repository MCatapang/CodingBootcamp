# JSX && Babel
---
```toc
```
---

## Defining JSX 
- **JSX**: (JavaScript XML) A syntax extension of JavaScript that allows us to directly write HTML in React within JavaScript code
	- JSX can't be interpreted out of the box
	- We need to use a transpiler like Babel


## Defining Babel
- **Babel**: a transpiler that turns JSX into JavaScript that browsers can understand


##  JSX vs. Babel
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


## Using JSX
- We can create JavaScript code that closely resembles HTML using JSX
	- e.g.,
		```js
		class App extends Component {
			render() {
				return (<h1>Hello World</h1>);
			}
		}
		```
- There are rules you have to keep in mind when using JSX:
	1. JSX Expressions must have one Parent Element
		e.g., the code below will return an error for not having **one** parent tag.
		```js
		class App extends Component {
			render() {
				return (
					<h1>Hello World</h1>
					<p>This is a paragraph</p>
					// both elements above will be considered parent tags
				)
			}
		}
		```
		e.g., instead, we can place the elements above in a single tag like `<div>` or an empty tag like `<>` if we don't want to introduce additional elements into the DOM
		```js
		class App extends Component {
			render() {
				return (
					<h1>Hello World</h1>
					<p>This is a paragraph</p>
					// both elements above will be considered parent tags
				)
			}
		}
		```
	2. Certain HTML attributes will have their own JSX versions in order to avoid ambiguity
		- E.g., The code below will return an error due to how there are two `class`es being used in different ways.
		```js
		class App extends Component {    // class is used to denote an object class
		    render() {        
		        return (            
		            <h1 class="my-class">This is JSX</h1>
		            // class is used to connect the HTML element to CSS       
		        );    
		    }
		}
		```
		- E.g. For the `class` used in HTML, we must then use the `className` attribute instead since we're in JSX
		```js
		class App extends Component {    
		    render() {        
		        return (            
		            <h1 className="my-class">This is JSX</h1>
		            // `className` is used      
		        );    
		    }
		}
		```
		- E.g., Here's another example of when HTML atttributes get replaced by their JSX versions
		```js
		class App extends Component {
			render() {
				return (
					<form action="/process" method="post">
						<div className="form-group"> // class -> className
							<label htmlFor="email">Email:</label>
							// for -> htmlFor
							<input type="text" id="email" name="username" className="form-control" />
						</div>
					</form>
				);
			}
		}
		```