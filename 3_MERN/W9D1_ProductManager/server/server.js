// ------------------------------------------------Declarations
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'products'

// ------------------------------------------------Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}))

// ------------------------------------------------Connection to Files
const config = require("./config/mongoose.config")
config(DB);
const routes = require("./routes/product.routes")
routes(app);


// ------------------------------------------------Server Initialization
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${8000}!`);
})
