// PROBLEM 1

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };


function fewestCoinChange(cents) {
    outputDictionary = {}
    if( (cents/25) >= 1) {
        i = 0;
        while(cents >= 25) {
            cents -= 25;
            i++;
        }
        outputDictionary["quarter"] = i;
    }
    if (cents/10 >= 1) {
        i = 0;
        while (cents >= 10) {
            cents -= 10;
            i++;
        }
        outputDictionary["dime"] = i;
    }
    if (cents/5 >= 1) {
        i = 0;
        while (cents >= 5) {
            cents -= 5;
            i++;
        }
        outputDictionary["nickel"] = i;
    }
    if (cents/1 >= 1) {
        i = 0;
        while (cents >= 1) {
            cents -= 1;
            i++;
        }
        outputDictionary["penny"] = i;
    }
    return outputDictionary
}

// console.log(fewestCoinChange(cents1))
// console.log(fewestCoinChange(cents2))
// console.log(fewestCoinChange(cents3))
// console.log(fewestCoinChange(cents4))








// PROBLEM 2

const two_nums1 = [3, 0, 1];
const two_expected1 = 2;

const two_nums2 = [3, 0, 1, 2];
const two_expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const two_nums3 = [2, -4, 0, -3, -2, 1];
const two_expected3 = -1;

const two_nums4 = [5, 2, 7, 8, 4, 9, 3];
const two_expected4 = 6;

// Ordered Nums Array = [0, 1, 3]

function missingValue(unorderedNums) {
    orderedNums = unorderedNums.sort((a,b) => a-b);
    for(i=0; i<orderedNums.length; i++) {
        value1 = orderedNums[i];
        value2 = orderedNums[i+1];
        if(value2 != (value1+1)) {
            if((value1+1) < orderedNums[orderedNums.length-1]){
                return(value1+1);
            }
        }
    }
    return null;
}

console.log(missingValue(two_nums1));
console.log(missingValue(two_nums2));
console.log(missingValue(two_nums3));
console.log(missingValue(two_nums4));