
function twoSums(array, target) {
    for(let i=0; i<array.length; i++) {
        for(let j=(i+1); j<array.length; j++) {
            if((array[i] + array[j]) == target){
                return ([i, j]);
            }
        }
    }
    return ("Sorry there's no solution");
}

// // INCOMPLETE: Attempt at utilizing a "while" loop instead
// function twoSums(array, target) {
//     let i = 0;
//     let k = 0
//     let j = i + k;
//     while(array[j] < array.length) {
//         (array[i] + array[j] == target) ? 
//             [i, k] : k++;
//     }
//     i++
//     twoSums(array, target);
// }

console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]