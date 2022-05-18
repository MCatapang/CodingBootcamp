const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};

obj1.__proto__ = obj2;

function entries(obj) {
    let output = [];
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    for(let i=0; i<keys.length; i++) {
        let miniArray = [];
        miniArray.push(keys[i], values[i]);
        output.push(miniArray);
    }
    return output;
}

// console.log(entries(obj1));
// console.log(entries(obj2));



// -----------------------------




const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

function insert(tableName, columnValuePairs) { 
    let keys = "";
    let values = "";
    for(singleKeys in columnValuePairs) {
        keys += (singleKeys + ", ");
        values += (columnValuePairs[singleKeys] + ", ");
    }
    let statement = `INSERT INTO ${tableName} (${keys}) VALUES (${values});`;
    return statement;
}

// console.log(insert(table, insertData1));
console.log(insert(table, insertData2));