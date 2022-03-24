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
            counter(); // which runs the function
            counter(); // and runs the function again

    // JavaScript code runs line by line
        // in the example...
            function counter() {
                for (var num=0; num <=5; num++) {
                    console.log(num);
                }
            }
            counter(); // (which runs the function)
            counter(); // (and runs the function again)
                // line 25 runs first
                // line 21 then runs, all the way down to line 22
                // line 26 then runs (line 25 is skipped since it's an invocation that was already ran)
                // line 21 through 22 is then ran again.
        // in the example...
            var num = 15;
            console.log(num);
            function logAndReturn(num2){
            console.log(num2);   
            return num2;
            }
            var result = logAndReturn(10);
            console.log(result);
            console.log(num);
                // line 32 runs first
                // line 33 then runs
                // line 38... line 35-36
                // line 39
                // line 40


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
        // "console.log()" can only be seen by developers; "return" would allow users to see the run product in their app.

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

// Return: ends function execution and specifies a value to be returned to the function caller
    // In the function below...
        function calculateTipAmount (billTotal, tipPercent){
            var tipDue = billTotal * tipPercent;
            console.log("If you see this, this is just after tipDue was calculated");
            return tipDue;
        }
        calculateTipAmount(140, .20);
        // the console.log() will show developers "If you see, this is just after tipDue was calcaulted"
        // the "return tipDue" will end the "calculateTipAmount" function execution, and define a value of "28" to for the invocation "calculateTipAmount(140, .20)".




// Loops: used to repeatedly run a block of code until a certain condition is met.

    // "For" Loops
        // the following block of code...
            console.log(0);
            console.log(1);
            console.log(2);
            console.log(3);
            console.log(4);
            console.log(5);
        // can be rewritten as the following loop...
            for (var num = 0; num <= 5; num++) {
                console.log(num);
            }
        // the order of execution is as follows:
            // var num = 0 is executed just once
            // num <= 5 gets evaluated. num = 0 from the previous execution, as such, num <=5 is true.
            // since num <=5 is true, the code inside the code block is execute; console.log(num) is in the code block, as such, console.log(0) is executed
            // "0" is now printed by the console.
            // num = 0 and num <= have been executed; num++ is now executed
            // num = 0 becomes num = 1.
            // num <=5 is then evaluated; 1 <= 5 is true; 
            // since num <=5 is true, console.log(num) is once again executed
            // "1" is now printed by the console.
            // (the process is re-executed until num <=5 because false.)
            // (for example, once num = 6, num <= 5 becomes false. Since this parameter is "false," the code inside the code block won't run)
            // "0", "1", "2", "3", "4", and "5" have successfully been printed by the console thanks to the function above.

    // "While" Loops
        // the following "For" loop...
            for (var num = 0; num <= 5; num++) {
                console.log(num);
            }
        // can be rewritten as the followoing "While" loop...
            var num = 0;
            while (num <=5) {
                console.log(num);
                num++;
            }
        // and the "While" loop above will print the same values as the previous "For" loop...
            // "0", "1", "2", "3", "4", and "5" 

    // The difference between "For" and "While" Loops
        // "For" Loops are usually used when you want to repeat a process *a known number of times*
        // "While" Loops are usually usued when you want to repeat a process *until some condition is met*





// The Variable "i": denotes the place of a value in an array

    // not used in the same way as other variables
    // other variables denote *a value*; "i" denotes *the place of a value in an array* but if var.method combinations such as "console.log(arr[i])" is used.
    //