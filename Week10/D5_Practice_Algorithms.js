const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

function lengthOfLongestSubString(str) {
    const stringDictionary = {};
    let tempStr = "";
    for(let j=0; j<str.length; j++) {
        for(let i=j; i<str.length; i++) {
            if(tempStr.includes(str[i])) {
                stringDictionary[tempStr] = tempStr.length;
                tempStr = "";
                break;
            }
            if(str[i] != str[i-1]) {
                tempStr += (str[i]);
            };
        };
    };
    console.log(stringDictionary);
    return Math.max(...Object.values(stringDictionary))
}

console.log(lengthOfLongestSubString(str1));
console.log(lengthOfLongestSubString(str2));
console.log(lengthOfLongestSubString(str3));
console.log(lengthOfLongestSubString(str4));