# API: Application Programming Interface
---
```toc
```

---

## Intro to Rest APIs
- ==API: Application Programming Interface==: an interface that allows on program/application to communicate with another (i.e., a bridge)
	- ==RESTful API==: an API that communicates among and between web services


---

## Consuming APIs
- ==`fetch`==: the built-in method to cosume data from an API in JavaScript, utilizing **promises**
	```js
	fetch("http://www.example.com")
		.then( response => {
			return response.json();
		}).then( producedResponse => {
			setState(producedResponse);
		}).catch( err => {
			console.log(err);
		})
	```
	- Which can also be written using `await`
		```js
		let response = await fetch("http://www.example.com/");
		```


---

## useEffect()


---

## Axios
