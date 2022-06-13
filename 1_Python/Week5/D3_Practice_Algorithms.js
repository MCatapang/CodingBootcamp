// ------------------FIRST PROBLEM------------------- //

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

function dedupeSorted(nums) {
    // holderVar = 0
    outputList = []
    for(i=0; i<nums.length; i++) {
        if(nums[i] != nums[i+1]) {
            outputList.push(nums[i]);
        }
    }
    return outputList;
}

console.log(dedupeSorted(nums2));




// ------------------SECOND PROBLEM------------------- //

const two_nums1 = [3, 5, 4, 3, 4, 6, 5];
const two_expected1 = 6;

const two_nums2 = [3, 5, 5];
const two_expected2 = 3;

const two_nums3 = [3, 3, 5];
const two_expected3 = 5;

const two_nums4 = [5];
const two_expected4 = 5;

const two_nums5 = [];
const two_expected5 = null;


function firstNonRepeated(nums) {
    for(i=0; i<nums.length; i++) {
        for(j=(i+1); j<nums.length; j++) {
            if(nums[i] != nums[j]) {
                continue;
            }
            if(nums[i] == nums[j]) {
                
            }
        }
    }
}