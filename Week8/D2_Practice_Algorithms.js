const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];


// NON FUNCTIONAL
function mergeDedupe(sortedA, sortedB) {
    let i=0;
    let j=0; 
    let newArr = [];
    while(i < sortedA.length && j < sortedB.length) {
        console.log("Just entered the while loop");
        if(sortedA[i] !== sortedB[j]) {
            j++;
            if(j > sortedB.length) {
                i++;
            }
        }
        else {
            newArr.push(sortedA[i]);
            i++;
        }
    }
    return newArr;
}

console.log(mergeDedupe(arrA1, arrB1));