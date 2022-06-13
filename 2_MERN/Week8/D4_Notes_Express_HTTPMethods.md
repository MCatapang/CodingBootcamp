# HTTP Methods
---
```toc

```
---

## Overview
- The different types http request methods are as follows:
	- ==**GET**==: used for passing *insensitive* information
	- ==**POST**==: used for passing *sensitive* information
	- ==**PUT**==: used for passing *updating whole sensitive* information
	- ==**PATCH**==: used for passing *updating pieces of sensitive* information
	- ==**DELETE**==: used for passing *deleting sensitive* information

### GET
- **Query parameters** are sent as part of the URL
- GET requests can be cached
	- Also stored in your browser's history
- Get requests can also be bookmarked'

### POST
- POST requests send data behind the scenes inside the HTTP request **body**
	- Never cached so they don't linger in your browser history
	- There's no limit on how much data you can send
- Majority of HTTP request methods you'll be dealing with is POST
	- Forms that control user registration
	- User authentication
	- User authorization
	- Creating a new object to store in the database

### PUT
- PUT requests work the same as POST requests
	- However, **it's used to update a WHOLE entitty in the database**

### PATCH
-  PATCH requests also work the same as POST requests
	- However, **it's used to update a PIECE of an entity in the database**

### DELETE
- DELETE requests are often used to delete an entity from the database


---

## HTML Forms
- Native HTML forms without the help of JavaScript can only make GET and POST requests
- Web frameworks, however, can 'fake' the other HTTP request types by passing a hidden form input
	- E.g., the following might be submitting as a **PUT** request even though it's technically making a **POST** request
	```html
	<form action="/process" method="POST">
	    <input type="hidden" name="_method" value="PUT" />
	    <!-- ... -->
	</form><br>
	```