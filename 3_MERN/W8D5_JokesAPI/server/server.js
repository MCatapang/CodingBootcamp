// ------------------------------------------------Declarations
const express = require('express');
const app = express();
const PORT = 8000;
const DB = 'joke'

// ------------------------------------------------Middleware
app.use(express.json(), express.urlencoded({extended:true}))

// ------------------------------------------------Connection to Files
const config = require("./config/mongoose.config")
config(DB);
const routes = require("./routes/jokes.routes")
routes(app);


// ------------------------------------------------Server Initialization
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${8000}!`);
})