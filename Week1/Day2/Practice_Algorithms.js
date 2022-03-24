/*****************/
// Lesson 1

// Variables
    // Variables: a storage spot for a value
    // The computer doesn't care what the name of a variable is?
    // The bar at the top initializes the .js code
    // e.g., 
        var firstName = "Michael"
        var lastName = "Catapang"
    // The "=" in the line above is the Assignment Operator
        // The right side always runs first, and the parentheses run first
// Naming Conventions
    // Allows developers to understand what the code is doing
    // "saoudhaoidaiodjiowqeidqiod" is a valid variable
        // However, it's not a good variable
        // "dogName" is a better variable
        //e.g.,
            var dogName = "Celeste"
// Formatting
    // In JavaScript, we use "camelCase"
    // camelCase: the first word is lowercased and the subsequent words are uppercase

var a = 25;
a = a-13;
console.log(a/2);

a = "hello";
console.log(a + " hello");


// Loop
    // Loop: it's an iteration (i.e., it performs multiple actions)
        for(var i=0; 9<10; i++) {
            console.log(i)
            i = i + 3
        }

    // the variable for "for" is "i=0"
    // it's usually structured as "for(loop variable; condition; increment)

// Dependent-Independent Index Values in Arrays (you made these terms; they're not verified to be correct)
    // for the following example, the index value to the left of the operator will copy the value of the index value to the right of the operator.
        i = [1,2,3,4,5]
        i[0] = i[4]
        i[0] = 5
        i = [5,2,3,4,5]