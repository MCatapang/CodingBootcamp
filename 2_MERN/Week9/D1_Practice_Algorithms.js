// ------------------------------------------------Notes
const doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: true,
}

// for (someKey in doggo) {
//     console.log(doggo[someKey]);
// }

const doggoKeys = Object.keys(doggo);
// console.log(doggoKeys);

const doggoValues = Object.values(doggo);
// console.log(doggoValues);

const doggoEntries = Object.entries(doggo);
// console.log(doggoEntries);

const doggoProperty = doggo.hasOwnProperty("favFood");
// console.log(doggoProperty);

for(keys in doggo) {
    console.log(keys);
}

// obj1.__proto__ = obj2;






// ------------------------------------------------Algorithm

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    //   { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

/* Pseucode
    1. Loop through `items` and find object that have key
    2. Check if objects have desired value assigned to that key
    3. Push object into `output` array using `.push(item[idx])`
    4. Return `output`
*/


function findObjectsFilter(searchObj, items) {
    let output = [];
    for(index in items) {
        let obj = items[index];
        if(obj.hasOwnProperty("firstName") && obj.hasOwnProperty("age")) {
            if(obj["firstName"] == searchObj["firstName"] && obj["age"] == searchObj["age"]) {
                output.push(obj);
            }
        }
    }
    return output; 
}


console.log(findObjectsFilter(searchFor1, items));
// console.log(findObjectsFilter(searchFor1, items).toString() == output1.toString());
// console.log(findObjectsFilter(searchFor2, items));