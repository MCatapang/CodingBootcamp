const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

function rotateStr(str, amnt) {
    let newString = "";
    if(amnt > str.length) { // used when the str is going to make a full rotation
        amnt -= str.length; // ensures that amnt is less than str.length
    }
    for(let i=(str.length-amnt); i<str.length; i++) { // adds index 1 value up until the last index to the new string
        newString += str[i];
    }
    for(let j=0; j<str.length-amnt; j++) { // adds index 0 value to the newString
        newString += str[j];
    }
    return newString; // creates magic wow amazing
}

console.log(rotateStr(str,14));




/* -------------------------------------------------------------------- */




const two_strA1 = "ABCD";
const two_strB1 = "CDAB";
// CDAB -> BCDA -> ABCD
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const two_expected1 = true;

const two_strA2 = "ABCD";
const two_strB2 = "CDBA";
// CDBA -> ACDB -> BACD -> DBAC
// Explanation: all same letters in 2nd string, but out of order
const two_expected2 = false;

const two_strA3 = "ABCD";
const two_strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const two_expected3 = false;

// Pseudocode
    // Create a function that accept two strings
    // Check if both strings are the same length
        // Yes, continue
            // for loop init i = 0, i < str1.length, i++
                //     let holder = rotateStr(str1,i)
                //     if holder == two_strA2yes, return true
        // No, return false
    // return false

function isRotation(s1, s2) {
    if(s1.length ==s2.length) {
        for(let i=0; i<s1.length; i++) {
            let holder = rotateStr(s1,i);
            if(holder == s2) {
                return true;
            }
        }
    }
    else {
        return false;
    }
    return false;
}

console.log(isRotation(two_strA3, two_strB3));