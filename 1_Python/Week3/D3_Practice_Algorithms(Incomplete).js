const str1 = "aaaabbcdddaaa";
const expected1 = "a4b2c1d3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/* Pseudo-Code
    - create a function that takes in a string
    - deconstruct string into individual characters
    - create a variable that represents each letter
    - count instances of each letter
    - integrate the letter and count back into a string
*/

function encode(str){
    letterA = 0;
    letterB = 0;
    letterC = 0;
    letterD = 0;
    for(i=0; i<str.length; i++) {
        if(str[i] == "a") {
            letterA++
        }
        if(str[i] == "b") {
            letterB++
        }
        if(str[i] == "c") {
            letterC++
        }
        if(str[i] == "d") {
            letterD++
        }
    }
    output = "a" + letterA + "b" + letterB + "c" + letterC + "d" + letterD
    console.log(output);
}

encode(str1)







const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {}