# Styles
---
```toc
```
---

## Overview
- There are multiple ways to add styles to a React app
- Ways to do so include:
	- [[#Direct Import]]
	- [[#Inline Styles]]
	- [[#CSS Modules]]


---

## Direct Import
- ==Direct Import==: simply importing a CSS file directly and using its classes
	```css
	/* styles.css */
	.btn {
	    padding: 12px 15px; 
	    font-family: Arial, sans-serif;
	    font-weight: bold;
	    background: linear-gradient(30deg, rebeccapurple, magenta); 
	    color: #fff; 
	    border: none;
	}

	```
	```js
	import React, {Component} from 'react';
	import './styles.css';
	
	class MyButton extends Component {
		render() {
			return <button className="btn">{props.children}</button>;
		}
	}
	
	export default MyButton;
	```
- However, utilizing **Direct Import** presents the drawback that we use the "btn" `className` anywhere else in our application, the same styles may be applied – which may not be the desired outcome


---

## Inline Styles
- ==Inline Styles==: directly passing an object to the style attribute of an HTML element
	```js
	import React, { Component } from 'react';
	 
	const btnStyle = {
	    padding: '12px 15px',
	    fontFamily: 'Arial, sans-serif',
		fontWeight: 'bold',
	    background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
	    color: '#fff',
	    border: 'none'
	};
	 
	class MyButton extends Component {
	    render() {
	        return <button style={ btnStyle }>{ props.children }</button>;
	    }
	}
	    
	export default MyButton;
	```
- However, doing so poses the drawback that media queries can't be used for responsiveness and it also doesn't support pseudo-classes
- When utilizing inline styles through JSX,  certain modifications must be made:
	- They must be camelCased as opposed to hyphenated (e.g., `fontWeight` works; `font-weight` doesn't)
	- All values, including 0, must be strings (e.g., `"12px"` instead of just `12px`)


---

## CSS Modules
- ==CSS Modules==: .css files that are simply imported into component files
	```css
	/* MyButtonComponent.module.css */
	.btn {
	    padding: 12px 15px; 
	    font-family: Arial, sans-serif; 
	    font-weight: bold;
	    background: linear-gradient(30deg, rebeccapurple, magenta); 
	    color: #fff; 
	    border: none;
	}
	```
	```js
	// MyButtonComponent.js
	import React, { Component } from 'react';
	import styles from './MyButtonComponent.module.css';
	 
	    
	class MyButton extends Component {
	    render() {
	        return <button className={ styles.btn }>{ props.children }</button>;
	    }
	}
	    
	export default MyButton;
	```
- This technique overcomes a number of the problems of the first two:
	- `create-react-app` supports CSS Modules by default; no need for special adjustments
	- You can use media queries
	- Completely encapsulated at the component level
- However, some level of adjustments still need to be made:
	- Note that the name of the CSS file needs to end in **module.css** in order to work.
	- Class names still cannot be hyphenated – they must be camelCased.
