/* ------------------FIRST PROBLEM--------------------- */




const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   Hi my name    is tyler     ";
const expected2 = "Hi my name    is tyler";

function trim(str) {
    for(i=0; i<str.length; i++) {
        if(str[i] != " ") break;
    }
    for(j=str.length-1; j>=0; j--) {
        if(str[j] !=  " ") break;
    }
    return str.slice(i,j+1)
}

console.log(trim(str5));




/* -----------------SECOND PROBLEM---------------------- */




const two_strA1 = "yes";
const two_strB1 = "eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

function isAnagram(s1, s2) {
    if(s1.length != s2.length) return false;
    let obj1 = makeFrequencyTable(s1.toLowerCase());
    let obj2 = makeFrequencyTable(s2.toLowerCase());
    // if(JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
    for(const key in obj1) {
        if(key in obj2 == false) return false;
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
}

function makeFrequencyTable(arr) {
    let output = {};
    // for of = value
    for (let item of arr) {
      if (!output[item]) {
        output[item] = 0;
      }
      output[item] += 1;
    }
    return output;
}

console.log(isAnagram(two_strA1, two_strB1))
console.log(isAnagram(two_strA2, two_strB2))
console.log(isAnagram(two_strA3, two_strB3))
console.log(isAnagram(two_strA4, two_strB4))




/* -----------------EXTRAS---------------------- */




// Utils.compareObjects = function(o1, o2){
//     for(var p in o1){
//         if(o1.hasOwnProperty(p)){
//             if(o1[p] !== o2[p]){
//                 return false;
//             }
//         }
//     }
//     for(var p in o2){
//         if(o2.hasOwnProperty(p)){
//             if(o1[p] !== o2[p]){
//                 return false;
//             }
//         }
//     }
//     return true;
// };



// Michael's (unfinished 04/15/22)
// function trim(str) {
//     newStr = ""
//     for(i=0; i<str.length; i) {
//         if(str[i] == " ") {
//             n
//         }
//     }
// }
