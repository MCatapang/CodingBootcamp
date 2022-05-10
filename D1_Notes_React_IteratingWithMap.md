# Iterating with .Map()
---
```toc
```
---

## JS Iteration – Traditional
- Iterating through an array (i.e., list)  traditionally was done through the following:
	```js
	const nums = [1,2,3,4,5];
	const newNums = [];
	for(let i=0; i<nums.length; i++){
		newNums.push(nums[i]*2);
	}
	console.log(newNums);
	```


---

# JS Iteration – .Map()
- The same task can be accomplished with `.map()` in JavaScript
	```js
	const nums = [1,2,3,4,5];
	const newNums = nums.map( (num) => num*2 );
	console.log(newNums);
	
	// or
	
	const nums = [1, 2, 3, 4, 5];
	const double = (num) => num * 2;
	const newNums = nums.map(double);
	console.log(newNums);
	```


---

## .map() in React
- This can be applied in React
	```js
	import React from 'react';
 
    
	const Groceries = (props) => {
	    // this could just as easily come from props
	    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
	    return ( 
	        <ul>
	            { groceryList.map( (item, i) => 
	                <li key={ i }>{ item }</li> ) }
	        </ul>
	    ); 
	}
	    
	export default Groceries;
	```