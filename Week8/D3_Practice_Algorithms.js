function findConsecutiveSums(array, target) { 
    outputArray = [];
    for(let i=0; i<array.length; i++) {
        let sum = 0;
        let miniArray = [];
        for(let j=i; sum<target; j++) {
            let j = i;
            sum += array[j];
            miniArray.push(array[j]);
            console.log("the current sum is " + sum);
            console.log("the current miniArray is " + miniArray);
            if(sum === target) {
                outputArray.push(miniArray);
                console.log("just pushed " + miniArray);
            };
            i++;
        }
        outputArray.push(miniArray);
    }
    return outputArray;
}

// unfinished

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16)); 
/* Output:
[
    [2,5,3,6],
    [3,6,7]
    ...
]
*/