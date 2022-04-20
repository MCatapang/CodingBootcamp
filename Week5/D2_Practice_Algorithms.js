// FIRST PART

const two_arrA1 = [1, 2, 3];
const two_arrB1 = ["a", "b", "c"];
const two_expected1 = [1, "a", 2, "b", 3, "c"];

const two_arrA2 = [1, 3];
const two_arrB2 = [2, 4, 6, 8];
const two_expected2 = [1, 2, 3, 4, 6, 8];

const two_arrA3 = [1, 3, 5, 7];
const two_arrB3 = [2, 4];
const two_expected3 = [1, 2, 3, 4, 5, 7];

const two_arrA4 = [];
const two_arrB4 = [42, 0, 6];
const two_expected4 = [42, 0, 6];


function interleaveArrays(arr1, arr2) {
    var a = 0
    if (arr1.length > arr2.length){
      a = arr1.length
    }
    else {
      a = arr2.length
    }
    var newArr = []
    for (i=0; i<a; i++){
      if(arr1[i] != null ){
        newArr.push(arr1[i]);
      }
      if(arr2[i] != null ){
        newArr.push(arr2[i]);
      }
    }
    return newArr;
}

console.log(interleaveArrays(two_arrA1,two_arrB1))
console.log(interleaveArrays(two_arrA2,two_arrB2))
console.log(interleaveArrays(two_arrA3,two_arrB3))
console.log(interleaveArrays(two_arrA4,two_arrB4))














// SECOND PART

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

// UNFINISHED
function binarySearch(sortedNums, searchNum) {
    var middlePoint = math.ceil(arr1.length/2);
    var smallerArr = 0
    while (searchNum != sortedNums){
      if (searchNum < sortedNums[middlePoint]){
        smallerArr = sortedNums.slice(0,middlePoint)
      }
      if (searchNum > sortedNums[middlePoint]){
        smallerArr = sortedNums.slice(middlePoint, arr1.length-1)
      }
    }
    if (searchNum = sortedNums[middlePoint]){
      return true;
  
}