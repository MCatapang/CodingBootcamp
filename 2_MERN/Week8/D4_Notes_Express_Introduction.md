# Introduction to Express
---
```toc
```
---

## Defining Express
- ==Express.js==: a framework written in JavaScript which acts as an interface to Node's server functionality
	- Allows us to creat a robust server with more or less whatever architecture we choose
- There are other server frameworks for **Node** (e.g., **Hapi**, **Koa**, and **Fastify**)
	- Express is extremely popular however


---

## Basic Routing Syntax
- Because we are using Express primarily to build our APIs, it's best practice to start every such route with "/api" which will help us avoid route collisions with React's client-side routing

### GET Data
```js
// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (req, res) => {
    res.json( users );
});
```

### POST Data
```js
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
});
```


---

## Route Parameters
- Any data you want to pass via the URL must be indicated by a colon (`:`)
- This parameter will then be available in the `req.params` object
```js
app.get("/api/users/:id", (req, res) => {
	console.log(req.params.id);
	res.json( users[req.params.id] );
})
```

### UPDATE Data
```js
app.put("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json( { status: "ok" } );
});
```

### DELETE Data
```js
app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json( { status: "ok" } );
});
```