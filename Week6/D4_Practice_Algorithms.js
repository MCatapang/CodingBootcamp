const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

function lowestCommonMultiple(a, b, output=0) {
    if (a<b) {
        output += b;
        if (output%a == 0) {
            return output;
        }
        return lowestCommonMultiple(a, b, output);
    }
    else {
        output += a;
        if (output%b ==0) {
            return output;
        }
        return lowestCommonMultiple(a, b, output);
    }
}

console.log(lowestCommonMultiple(num5A, num5B));




const two_str1 = "1?0?";
const two_expected1 = ["1000", "1001", "1100", "1101"];

// unfinished function
function binaryStringExpansion(str, newStr=str) {
    var arr = Array.from(str);
    for(i=0; i<arr.length; i++) {
        if(arr[i] === "?") {
            arr[i] = "0";
            newStr = arr.join("")
            console.log(newStr); // instead of console.log just create an output array and enter that into the parameter
            binaryStringExpansion(newStr);
        }
    }
}

// console.log(binaryStringExpansion(two_str1));