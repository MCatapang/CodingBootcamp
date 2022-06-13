function breakPalindrome(palindromeStr) {
    let outputStr = "";
    let i = 0;
    while(i<palindromeStr.length) {
        let character = palindromeStr[i];
        if(character == "a") {
            outputStr += character;
        } else {
            outputStr += "a";
            break;
        }
        i++;
    }
    outputStr += palindromeStr.slice(i+1, palindromeStr.length+1);
    let reverseStr = outputStr.split("").reverse().join("");
    if(outputStr == palindromeStr || outputStr == reverseStr) {
        return "Impossible";
    }
    return outputStr;
}

console.log(breakPalindrome("aabaa"));