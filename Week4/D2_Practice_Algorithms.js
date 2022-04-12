// const str1 = "hello";
// const expected1 = "olleh";

// const str2 = "hello world";
// const expected2 = "olleh dlrow";

// const str3 = "abc def ghi";
// const expected3 = "cba fed ihg";

// // Part 1: Letter Order Reverser per Word
// function reverseWords(string) {
//     var array = string.split(" ");
//     var tempArray = [];
//     // for(i=0; i<array.length; i++) {
//     //     array[i] = array[i].split("").reverse().join("");
//     // }
//     for(var temp of array) {
//         for(var i=temp.length-1; i>=0; i--) {
//             tempArray += temp[i];
//         }
//         tempArray += " ";
//     }
//     // var newString = "";
//     // for(i=0; i<array.length; i++) {
//     //     newString += array[i];
//     // }
//     return tempArray;
// }

// console.log(reverseWords(str2));




/* ---------------------------------------------------------- */




// [UNFINISHED] Part 2: Reverse Word Placements in a String

const two_str1 = "This is a test";
const two_expected1 = "test a is This";

const two_str2 = "hello";
const two_expected2 = "hello";

const two_str3 = "   This  is a   test  ";
const two_expected3 = "test a is This";

function reverseWords(string) {
    var tempArray = []
    for(i=string.length-1; i>=0; i--) {
        if(string[i] == " ") {
            tempArray += string[i];
        }
        else {
            tempArray += string[i];
        }
    }
    // var tempArray2 = []
    // for(i=0; i<tempArray.length; i++) {

    // }
}

reverseWords(two_str1);