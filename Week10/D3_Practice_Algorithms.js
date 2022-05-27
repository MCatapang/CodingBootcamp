/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//             v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c"; 
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/* Pseudocode:
    1. Loop over the entire strings
    2. When we see #, delete # and character before that
    3. Check if string1 and string2 are the same
    4. Return true if the same; return false if not
*/



function backspaceStringCompare(S, T) {
    let newS = [];
    let newT = [];
    let i = 0;
    while (i < S.length || i < T.length) {
        (S[i] !== "#") ? newS.push(S[i]) : newS.pop();
        (T[i] !== "#") ? newT.push(T[i]) : newT.pop();
        i++;
    }
    let output  = (JSON.stringify(newS) === JSON.stringify(newT)) ? true : false;
    return output;
}

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))