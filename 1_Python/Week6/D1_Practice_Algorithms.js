// Arrow Functions

// Example 1
(function (a) {
    return a + 100;
});

(a) => a + 100;


// Example 2
function advancedAddition(a, b) {
    return a + b + 100;
}

let advancedAddition = (a, b) => a + b + 100;


// Example 3
let a = 4;
let b = 2;
function superAddition() {
    return a + b + 100;
}

let a = 4;
let b = 2;
let superAddition = () => a + b + 100;


// Example 4
function chuckAddition(a, b) {
    let chuck = 42;
    return a + b + chuck;
}

let chuckAddition = (a, b) => {
    let chuck = 42;
    return a + b + chuck;
}








// AJAX & APIs

// Promises
fetch("https://coronavirus.m.pipedream.net/")
    .then( response => response.json() ) // waiting for data to come back then converting it to JSON
    .then( coderData => console.log(coderData) )
    .catch( err => console.log(err) ) // used to catch any errors with the request and console.log

// Async/Await
async function getCoderData() {
    var response = await fetch("https://coronavirus.m.pipedream.net/"); // we add the "await" keyword to make js wait for a response for our "fetch" before proceeding with the next line of code
    var coderData = await response.json(); // we then convert the data into json
    return coderData;
}
console.log(getCoderData());








// JSON
var data = {
    "orders": [
        {
            "orderno": 784692,
            "date": "June 30, 2088 1:54:23 AM",
            "trackingno": "TN000391",
            "customer": {
                "custid": 11045,
                "fname": "Sue",
                "lname": "Hatfield",
                "address": "1409 Silver Street",
                "city": "Ashland",
                "state": "NE",
                "zip": 68003
            }
        },
        {
            "orderno": 784693,
            "date": "March 3, 2088 8:18:14 PM",
            "trackingno": "TN000468",
            "customer": {
                "custid": 11045,
                "fname": "Sue",
                "lname": "Hatfield",
                "address": "1409 Silver Street",
                "city": "Ashland",
                "state": "NE",
                "zip": 68003
            }
        }
    ]
}

