const squareMatrix1 = [
    [1, 2, 3], 
    [4, 5, 6], 
    [9, 8, 9], 
];
const expected1 = 2;

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;


function diagonalDifference(sqrMatrix) { 
    let sum1 = 0;   // declare initial variabl 1
    let sum2  = 0;  // declare initial variable 2
    for(let i=0; i<sqrMatrix.length; i++) { // set up a for loop that iterates through .length
        sum1 += sqrMatrix[i][i];    // increase Sum1 by diagonal values
        sum2 += sqrMatrix[i][sqrMatrix.length-1-i]; // increase Sum2 by opposite diagonal values
    }
    return Math.abs(sum1 - sum2);   // return absolute value of difference
}

console.log(diagonalDifference(squareMatrix1));