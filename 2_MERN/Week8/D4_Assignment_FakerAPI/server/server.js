// ------------------------------------------------Boilerplate
const {faker} = require('@faker-js/faker');
const express = require('express');
const app = express();
const PORT = 8000;

// ------------------------------------------------Middleware
app.use(express.json(), express.urlencoded({extended:true}))

// ------------------------------------------------Connection to Routes
const users = require("./routes/usersandcompanies.routes.js");
users(app, faker);

// ------------------------------------------------Boilerplate
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${8000}!`);
})