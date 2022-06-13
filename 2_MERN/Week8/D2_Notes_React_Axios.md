# Axios
---
```toc
```
---

## Defining Axios
- ==Axios==: Axios is a library that allows us to easily configure API calls in JavaScript and our React app
- There are many third-party libraries that allow us to easily expand upon the funcitonality of JavaScript – **Axios** is one of them


---

## Using Axios
1. Install **Axios** in your **project-folder** (NOTE: make sure your terminal is pointing as your project folder)
2. Now, you can utilize it in your **App.js** and even **Component.jsx** as follows:
	```js
	import React, {useEffect, useState} from 'react';
	import axios from 'axios';
	
	const someComponent = props => {
		const [responseData, setResponseData] = useState(null);
		
		useEffect( () => 
			{
				axios.get('http://www.example.com')
				.then(response=>{setResponseData(response.data)})
			}, 
			[] 
		); 
		
		return(
			<div>
				{responseData}
			</div>
		)
	}
	```