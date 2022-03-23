// Functions: blocks of code that are a set of intructions regarding what the computer program should do.
    function nameOfFunction() {
        
    }

    // to actually get the function to work, we have to Invoke the function by calling its anem and adding "()"
        nameOfFunction();

    // for example:
        function counter() {
            for (var num=0; num <=5; num++) {
                console.log(num);
            }
        }
        counter (); // which runs the function
        counter (); // and runs the function again

    // more on what the function above does will be explained in "Algorithm App's Lessons 1-4

    // in the following example:
        var firstName = "Michael";
        var lastName = "Catapang";
        var age = 23;
        var height = "5 feet 10 inches";
        console.log(firstName); // Michael
        // "firstName" is a variable
        // "Michael" is a string value, requiring quotation marks
        // "23" is a numeric value, not requiring quotation marks
        // "age" is therefore a numerical variable, while heigh is a string variable

// Variables: pieces of a JavaScript code that hold information
    // you can access the information that you stored in a variable by invoking that variable

// Data Types
    // the most common data types in JavaScript are
        // string: any characters inside quotation marks
            var exampleOfString = "I am professional";
            var alsoAnotherString = "I am 50% professional";
        // number
        // undefined: the lack of value assigned to a variable
            var variableOne;
            console.log(variableOne); // undefined would be printed to your console
        // null: a value that is explicittly assigned, stating that nothing is being currently held in a variable
            let number = null;
            var exampleOfString = null;
        // boolean: a very fancy of way of saying true or false

// Conditional Statements: pieces of code used to execute some code only under certain conditions.
    // the syntax for javascript would look like:
        if (condition) {
            // (what to do if the condition is true)
        }
        else if (secondCondition) { // (you can have 0 to many of these statements)
            // (what to do if the secondCondition is true)
        }
        else { // (can have 0 or 1 of these statements)
            // (what to do if none of the previous conditions are met)
        }

    // for the block of code below...
        function onButtonTapTurnFlashlightOn() {
            if (light.bulb == true) {
                light.bulb = false;
            }
            else {
                light.bulb = true;
            }
        }
    // the line where the light would turn on if the light is already off:
        light.bulb = true;
    // the line where the light would turn off if the light is already on:
        light.bulb = false;
    // the line where the functionality of the button being pressed would start:
        function onButtonTapTurnFlashlightOn() {
            // (ignore this line and the next one; the answer is the line above)
        }

// Operators
    // Equal "=="
        1 == 2 => false; 1 == 1 => true
    // Not Equal "!="
        1 != 2 => true; 1 != 1 => false
    // Greater Than ">"
        1 > 2 => false; 2 > 1 => true
    // Less Than "<"
        1 < 2 => true; 3 < 2 => false
    // Greater Than or Equal To ">="
        1 >= 0 => true; 1 >= 1 => true
    // Less Than or Equal To "<="
        1 <= 0 => false; 1 <= 1 => true
        

// Arrays: a collection of strings or numbers
    // Instead of using...
        var usersFirstName = "Dwight";
        var usersLastName = "Schrute";
        var usersEmail = "beetsbears@battlestar.com";
    // you can use...
        var user =  ["Dwight", "Schrute", "beetsbears@battlestar.com"];
        user.push("jello");
    // in the example above, "push" is a Method.

// Methods: properties that contain function definitions
    // push: used to add value(s) at the end of an array
        var user =  ["Dwight", "Schrute", "beetsbears@battlestar.com"];
        user.push("jello");
    // pop: used to remove the vlaue at the end of an array; can't specify like the method "push"
        var user =  ["Dwight", "Schrute", "beetsbears@battlestar.com"];
        user.pop();
    // index numbers: used to access or update values in an array
        var user =  ["Dwight", "Schrute", "beetsbears@battlestar.com"];
        user[1] = "Martin"; // the first value in the array (i.e., "Dwight) has a corresponding index number of "0"; therefore, using the index number "1" defines the second value in the array; since the second value is already defined as "Schrute", "user[1]" will replace "Schrute" with "Martin".
        console.log(user);  // the console will print out "["Dwight", "Martin", "beetsbears@battlestar.com"]
    // length: used to evaluate how many values are contained in an array
        var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
        console.log(user.length);    // 3 values in the array
        user.pop();
        console.log(user.length);    // 2 values in the array