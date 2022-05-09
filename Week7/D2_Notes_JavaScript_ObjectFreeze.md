# Object.freeze()
---
```toc
```
---

## Defining `Object.freeze()`
- ==`Object.freeze()`==:  a method to induce immutability onto an object


---

## Using `Object.freeze()`

### Constants and Arrays
- Declaring a variable using `const` makes that varialbe immutable
- However, if the variable is an array or object, the object can still be modified
	```js
	const arr = [1,2,3,4];
	arr.push(300); // arr = [1,2,3,4,300]
	```
- `Object.freeze()` allows us to make the object immutable
	```js
	const arr = Object.freeze([1,2,3,4]);
	arr.push(300); // we're no longer allowed to change `arr`
	```


---

## Modifying Frozen Objects
- Even when an object is immutable with `Object.freeze()`...
	```js
	const groceryList = Object.freeze([
	  { "item": "carrots",           "haveIngredient": false },
	  { "item": "onions",            "haveIngredient": true  },
	  { "item": "celery",            "haveIngredient": false },
	  { "item": "cremini mushrooms", "haveIngredient": false },
	  { "item": "butter",            "haveIngredient": true  }
	]);
	```
- You can  still modify it using certain techniques

### Spread
- Using **Spread** will make a copy of the list for you to modify.
	```js
	const addThymeWithSpread = [...groceryList, {item: "thyme", "haveIngredient": false}];
	```

### Concatenate
- You can also join two arrays using the `.concat()` method, which returns a new array
	```js
	const thyme = [{item: "thyme", "haveIngredient": false}];
	const addThymeWithConcat = groceryList.concat(thyme);
	```

### Slice
- Using `.slice()` will allow you to enter two index values as an argument and return a new array with values inclusive of the first index all the way to the non-inclusive second index
	```js
	const animals = ["cat", "dog", "bison", "alpaca", "bird"];
	console.log(animals.slice(1,4)); // ['dog', 'bison', 'alpaca'];
	```
- Therefore, we can use `.slice()` to create a new list  that includes the values we want from the original list, as well as the list value that we want to add.
	```js
	const addThymeWithSlice = [ ...groceryList.slice(0,5), {item: "thyme", "haveIngredient": false}];
	```
- We can even use `.slice()` to update a value by chopping the value off the list , spreading the value at the same index (which is a dictionary for 'thyme'), then overwrite the value in its key-value pair.
	```js
	const thyme = [{item: "thyme", "haveIngredient": false}];
	const addThymeWithConcat = groceryList.concat(thyme);
	
	const updateTheThyme = [ ...addThymeWithConcat.slice(0,5), {...addThymeWithConcat[5], "haveIngredient": true}];
	```
- The `.slice()` method can even be used to remove a value from a frozen immutable list
	```js
	// `celery` is at groceryList[2]; we can therefore remove it by...
	const listWithNoCelery = [groceryList.slice(0,2), groceryList(3)];
	```

### Sort
- The `.sort()` method manipulates the **original array** and returns us with that **same array** 
	```js
	const items = ["carrots", "onions", "celery", "mushrooms", "butter", "thyme"];
	const sortedItems = items.sort();
	console.log(sortedItems);
	// ["butter", "carrots", "celery", "mushrooms", "onions", "thyme"]
	```
- However,  using the `.sort()` method on a frozen array would return an error
	```js
	const items = ["carrots", "onions", "celery", "mushrooms", "butter", "thyme"];
	const frozenItems = Object.freeze(items);
	const sortedFrozenItems1 = frozenItems.sort();
	// ERROR
	```
	- You can avoid this by using the spread operator
		```js
		const sortedFrozenItems2 = [...frozenItems].sort();
		console.log(sortedFrozenItems);
		// ["butter", "carrots", "celery", "mushrooms", "onions", "thyme"]
		```
	- **Take note that sorting numbers won't work in the same way**
	```js
	const numbers = [10, 5, 3, 12, 22, 8];
	numbers.sort();
	// this will return [10, 12, 22, 3, 5, 8 ]
	```