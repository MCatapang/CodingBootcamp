/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

function makeFrequencyTable(arr) {
    var ints = {}
    for(let i=0; i<arr.length; i++) {
        if (ints[arr[i]]) {
            ints[arr[i]] += 1;
        }
        else {
            ints[arr[i]] = 1;
        }
    }
    console.log(ints)
}

makeFrequencyTable(arr2)




// ***************************************************************************




/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const two_nums1 = [1];
const two_expected1 = 1;

const two_nums2 = [5, 4, 5];
const two_expected2 = 4;

const two_nums3 = [5, 4, 3, 4, 3, 4, 5];
const two_expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const two_nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const two_expected4 = 1;

function oddOccurrencesInArray(arr) {
    var ints = {}
    for(let i=0; i<arr.length; i++) {
        if (ints[arr[i]]) {
            ints[arr[i]] += 1;
        }
        else {
            ints[arr[i]] = 1;
        }
    }
    for(let key in ints) {
        if(ints[key]%2 === 1){
            console.log(key + " doesn't have a pair!");
        }
    }
}

oddOccurrencesInArray(two_nums4)