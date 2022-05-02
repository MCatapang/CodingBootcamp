// Instructions: rewrite the code the way it would be seen by the interpreter and predict the output



// // Problem 1
//     // Original
//     console.log(hello);
//     var hello = 'world';

//     // Interpreted
//     var hello; // the variable is initialized as undefined
//     console.log(hello);
//     hello = 'world'
    
//     // Predicted Output:
//     // undefined
//     // world




// // Problem 2
//     // Original
//     var needle = 'haystack';
//     test();
//     function test() {
//         var needle = 'magnet';
//         console.log(needle);
//     }

//     // Interpreted
//     var needle;
//     test();
//     function test() {
//         var needle;     // only the variable gets hoisted to the top of its scope
//         needle = 'magnet'       // the declaration of the variable stays where it was at
//         console.log(needle);        // the console.log stays where it weas at
//     }
//     needle = 'haystack'

//     // Predicted Output:
//     // undefined
//     // undefined
//     // magnet




// // Problem 3
//     // Original
//     var brendan = 'super cool';
//     function print() {
//         brendan = 'only okay';
//         console.log(brendan);
//     }
//     console.log(brendan);

//     // Interpreted
//     var brendan;
//     brendan = 'super cool';
//     function print() {      // the print() function was never invoked
//         brendan = 'only okay';
//         console.log(brendan)
//     }
//     console.log(brendan);

//     // Predicted Output
//     // super cool




// // Problem 4
//     // Original
//     var food = 'chicken';
//     console.log(food);
//     eat();
//     function eat() {
//         food = 'half-chicken';
//         console.log(food);
//         var food = 'gone';
//     }

//     // Interpreted
//     var food; 
//     food = 'chicken';
//     console.log(food);
//     eat()
//     function eat() {
//         var food;
//         food = 'half-chicken';
//         console.log(food); 
//         food = 'gone';
//     }

//     // Predicted Output
//     // chicken
//     // half-chicken




// // Problem 5
//     // Original
//     mean();
//     console.log(food);
//     var mean = () => {
//         food = "chicken";
//         console.log(food);
//         var food = "fish";
//         console.log(food);
//     }
//     console.log(food);

//     // Interpreted
//     var mean;
//     mean();
//     console.log(food);
//     mean = function() {
//         var food;
//         food = "chicken";
//         console.log(food);
//         food = "fish";
//         console.log(food);
//     }
//     console.log(food);

//     // Predicted Output
//     // undefined
//     // chicken
//     // fish
//     // undefined




// // Problem 6
//     // Original
//     console.log(genre);
//     var genre = "disco";
//     rewind();
//     function rewind() {
//         genre = "rock";
//         console.log(genre);
//         var genre = "r&b";
//         console.log(genre);
//     }
//     console.log(genre);

//     // Interpreted
//     var genre;
//     console.log(genre);
//     genre = "disco";
//     rewind();
//     function rewind() {
//         var genre;
//         genre = "rock";
//         console.log(genre);
//         genre = "r&b";
//         console.log(genre);
//     }
//     console.log(genre);

//     // Predicted Output
//     // undefined
//     // rock
//     // r&b
//     // disco




// // Problem 7
//     // Original
//     dojo = "san jose";
//     console.log(dojo);
//     learn();
//     function learn() {
//         dojo = "seattle";
//         console.log(dojo);
//         var dojo = "burbank";
//         console.log(dojo);
//     }
//     console.log(dojo);

//     // Interpreted
//     dojo = "san jose";
//     console.log(dojo);
//     learn();
//     function learn() {
//         var dojo;
//         dojo = "seattle";
//         console.log(dojo);
//         dojo = "burbank";
//         console.log(dojo);
//     }
//     console.log(dojo);

//     // Predicted Output
//     // san jose
//     // seattle
//     // burbank
//     // san jose




// Problem 8
    // Original
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students) {
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50) {
            dojo.hiring = true;
        }
        else if(dojo.students <= 0) {
            dojo = "closed for now";
        }
        return dojo
    }

    // Interpreted
    console.log(makeDojo("Chicago", 65));
    function makeDojo(name, students) {
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50) {
            dojo.hiring = true;
        }
        else if(dojo.students <= 0) {
            dojo = "closed for now";
        }
        return dojo
    }
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students) {
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50) {
            dojo.hiring = true;
        }
        else if(dojo.students <= 0) {
            dojo = "closed for now";
        }
        return dojo
    }

    // Test change

    // Predicted Output
    // TypeError: Assignment to Constant Variable       // dojo is a constant; it's cant be redeclared; it's a dictionary, however, so its key-value pair can be modified.