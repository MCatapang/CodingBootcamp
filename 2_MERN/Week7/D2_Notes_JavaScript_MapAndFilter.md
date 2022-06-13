# Map and Filter
---
```toc
```
---

## Map
- ==`map()`==: a method that will make a copy of an array, and using a callback function, will take each element of the array and return what we want to do to each element.
	```js
	const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
	const groceryList = groceries.map( item => `<li>${item}</li>`);
	console.log(groceryList);
	/* 
		[
			"<li>pearl onions</li>", 
			"<li>cremini mushrooms</li>", 
			"<li>thyme</li>"
		]
	*/
	```
- This method can also be used with an array of numbers
	```js
	const numbers = [1,2,3,4,5];
	const multipliedNumbers = numbers.map( value => (value**3) );
	console.log(multipliedNumbers);
	// output: [1,8,27,64,125]
	```


---

# Filter
- ==`.filter()`==: can be used to selectively return only the values we want from an array given a certain criteria
	```js
	const values = [1,2,3,4,5];
	const evens = values.filter( number => number%2 == 0);
	console.log(evens);
	// output: [2,4]
	```
- We can also utilize `.filter()` to return strings that contain a certain letter using `.includes()`
	```js
	const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
	const groceriesWithLetterO = groceries.filter( items => items.includes("o") );
	```
