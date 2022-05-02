// Instruction: predict the output; if error, state the error




// // Problem 1
//     const cars = ['Tesla', 'Mercedes', 'Honda']
//     const [ randomCar ] = cars
//     const [ ,otherRandomCar ] = cars
//     //Predict the output
//     console.log(randomCar)
//     console.log(otherRandomCar)

//     // Predicted Output
//     // Tesla
//     // Mercedes




// // Problem 2
//     // Original
//     const employee = {
//         name: 'Elon',
//         age: 47,
//         company: 'Tesla'
//     }
//     const { name: otherName } = employee;
//     //Predict the output
//     console.log(name);
//     console.log(otherName);

//     // Predicted Output
//     // ReferenceError: name is not defined
//     // Elon




// // Problem 3
//     // Original
//     const person = {
//         name: 'Phil Smith',
//         age: 47,
//         height: '6 feet'
//     }
//     const password = '12345';
//     const { password: hashedPassword } = person;  
//     //Predict the output
//     console.log(password);
//     console.log(hashedPassword);

//     // Predicted Output
//     // 12345
//     // undefined    // there is no "password" key inside the 'person' dictionary




// // Problem 4
//     // Original
//     const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
//     const [,first] = numbers;   // first == 2
//     const [,,,second] = numbers;    // second == 5
//     const [,,,,,,,,third] = numbers;        // third == 2
//     //Predict the output
//     console.log(first == second);
//     console.log(first == third);

//     // Predicted Output
//     // false
//     // true




// // Problem 5
//     // Original
//     const lastTest = {
//         key: 'value',
//         secondKey: [1, 5, 1, 8, 3, 3]
//     }
//     const { key } = lastTest;
//     const { secondKey } = lastTest;
//     const [ ,willThisWork] = secondKey;
//     //Predict the output
//     console.log(key);
//     console.log(secondKey);
//     console.log(secondKey[0]);
//     console.log(willThisWork);

//     // Predicted Output
//     // value
//     // [1, 5, 1, 8, 3, 3]
//     // 1
//     // 5