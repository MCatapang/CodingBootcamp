/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

var str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = "abcde";
const expected3 = "edcba";

// function reverseStr(str) {
//     return str.split("").reverse().join("");
// }

function reverseStr(str, revstr="", i=1) {
    if(str == "") {
        return "";
    }
    if(i == str.length+1){
        return "";
    }
    let char = str.slice(str.length-1, str.length-1);
    ++1;
    return char += reverseStr(str, revstr, i);
}

console.log(reverseStr(str3));








// Problem 2








const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const two_expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const two_expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const two_expected3 = true;

function binarySearch(sortedNums, searchNum, l = 0, r=sortedNums.length-1) {
    if (sortedNums.length === 0){
        return false;
    }

    let middle = Math.floor((l + r) / 2);
    // console.log(middle);

    if (sortedNums[middle] == searchNum){
        return true;
    }

    if (l >= r){
        return false;
    }

    if (sortedNums[middle] > searchNum) {
        return binarySearch(sortedNums, searchNum, l, r = middle - 1);
    } else {
        return binarySearch(sortedNums, searchNum, l = middle + 1, r);
    }
}