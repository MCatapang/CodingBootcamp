const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;

function parensValid(str) {
    var holderVariable = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            holderVariable.push(str[i]);
        }
        else if (str[i] == ")") { 
            if (holderVariable.length == 0) {
                return false;
            }
            holderVariable.pop();
        }
    }
    if (holderVariable.length == 0 ) {
        return true;
    }
    else {
        return false;
    }
}

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));








/* --------------------------------------------*/








const two_str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const two_expected1 = true;

const two_str2 = "D(i{a}l[ t]o)n{e";
const two_expected2 = false;

const two_str3 = "A(1)s[O (n]0{t) 0}k";
const two_expected3 = false;

// // Original Attempt
// function bracesValid(str) {
//     var holderVariable = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
//             holderVariable.push(str[i]);
//         }
//         else if (str[i] == ")" || str[i] == "]" || str[i] == "}") { 
//             if (holderVariable.length == 0) {
//                 return false;
//             }
//             holderVariable.pop();
//         }
//         // else if () {                 // needs code that will check for edge cases like two_str3 where
//         //     pass                     // there's a premature closing parenthesis, bracket, or curly
//         // }
//     }
//     if (holderVariable.length == 0 ) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// Presented Attempt
function bracesValid(str) {
    let arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            arr.push(str[i]);
        }
        else if (str[i] === ")" && arr.length !== 0) {
            if(arr.pop() !== "("){
                return false;
            }    
        }
        else if (str[i] === "}" && arr.length !== 0) {
            if(arr.pop() !== "{"){
                return false;
            }
        }
        else if (str[i] === "]" && arr.length !== 0) {
            if(arr.pop() !== "["){
                return false;
            }
        }
        else if (str[i] === ")" || str[i] === "}" || str[i] === "]" && arr.length === 0) {
            return false;
        }
    }
    if (arr.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(bracesValid(two_str1));
console.log(bracesValid(two_str2));
console.log(bracesValid(two_str3));
