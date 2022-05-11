# Promises
---
```toc
```
---

## Defining Promises
- ==Promise==: an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
- Promises have 3 states:
	1. ==Pending==: the outcome is not yet determined
	2. ==Resolved==: the outcome is completed successfully
	3. ==Rejected==: the outcome is completed with errors


----

## Utilizing Promises - `fetch`
- You can utilize the native JavaScript function `fetch()` to utilize promises:
	```js
	const fetchPokemon = () => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
		.then( response => { return response.json() })
		.then( jsonifiedResponse => setPokemons(jsonifiedResponse.results)
		.catch( err => console.log(err) )
	}
	```
	- `fetch()` makes a promise that the api data will come back
	- `.then()` handles fulfilled promises
		- Executes once `fetch()` is successful, or once the previos `.then()` has completed
	- `.catch()` handles failed promises
		- Executes after the previous `.then()` has completed


---

## Utilizing Promises - `axios`
- You can also utilize the axios library to make promises:
	```js
	const axiosGet = () => {
		axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
		.then( response => setPokemons(response.data.results) )
		.catch( err => console.log(err) )
	}
	```
	- Notice how axios has a `.get()` instead of a `fetch()`. 
	- Notice how we also need to type `response.data.results` in order to access the data – `axios` wraps our API dataset in a `data` key before delivering it to us