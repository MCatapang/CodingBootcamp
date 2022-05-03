const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums){
    for(i = 0; i < nums.length; i++){
        for(j = 0; j < nums.length - i - 1; j++) {
            if(nums[j] > nums[j + 1]) {
                // let temp = nums[j + 1];  // Original swap
                // nums[j + 1] = nums[j];
                // nums[j] = temp;
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]; // Modified swap with destructuring
            }
        }
    }
    return nums;
}

console.log(bubbleSort(nums1));
console.log(bubbleSort(nums2));
console.log(bubbleSort(nums3));