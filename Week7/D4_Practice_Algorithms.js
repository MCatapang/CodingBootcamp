// outer for loop starts with index = 1 = i; i++
// inner for loop starts with index = 0 = j; j--
// holderVar = array[i]
// array[j] > array[i] ? array[j] = holderVar : pass

const insertionSort = (arr) => {
    for(let i=1; i<arr.length; i++) {
        temp = arr[i];
        for (let j=(i-1); j>=0; j--) {
            if(temp < arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
            else {
                break;
            }
            // (temp < arr[j]) ? arr[j+1] = arr[j] : break; // Why doesn't `break` work in a ternary operator?
        }
    }
    console.log(arr);
}

insertionSort([3, 5, 2, 1, 0]);
insertionSort([3, 0]);
insertionSort([0]);
insertionSort([]);
insertionSort([1, 2, 3, 4, 5]);;
insertionSort([5, 4, 3, 2, 1])
insertionSort([5, 4, 0, 2, 1]);