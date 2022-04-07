// // Part 1

// const str1 = "a x a";
// const expected1 = true;

// const str2 = "racecar";
// const expected = true;

// const str3 = "Dud";
// const expected3 = false;

// const str4 = "oho!";
// const expected4 = false;

// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] !== arr[right]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPal(str4));




// Part 2

const two_str1 = "what up, daddy-o?";
const two_expected1 = "dad";

const two_str2 = "uh, not much";
const two_expected2 = "u";

const two_str3 = "Yikes! my favorite racecar erupted!";
const two_expected3 = "e racecar e";

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";

const two_str5 = "a1001x20002y567765z";
const two_expected5 = "567765";

    // // Potential Solution 1
    // function goPal(arr) {
    //     for(i=0; i<arr.length; i++) {
    //         var substring = "";
    //         for(j=1; j)
    //         if(arr[i-j] == arr[i+j]) {
                
    //         }
    //         else {
    //             break
    //         }
    //     }
    // }

    // Potential Solution 2
    function is_Palindrome(str1) {
        var rev = str1.split("").reverse().join("");
        return str1 == rev;
        }
        
    function longest_palindrome(str1){
        var max_length = 0,
        maxp = '';
        for(var i=0; i < str1.length; i++) {
            var subs = str1.substr(i, str1.length);
            for(var j=subs.length; j>=0; j--) {
                var sub_subs_str = subs.substr(0, j);
                if (sub_subs_str.length <= 1)
                    continue;
                    if (is_Palindrome(sub_subs_str)) {
                        if (sub_subs_str.length > max_length) {
                            max_length = sub_subs_str.length;
                            maxp = sub_subs_str;
                        }
                    }
                }
            }
            return maxp;
        }

        console.log(longest_palindrome(two_str1));
        console.log(longest_palindrome(two_str2)); 
        console.log(longest_palindrome(two_str3));
        console.log(longest_palindrome(two_str4));
        console.log(longest_palindrome(two_str5));