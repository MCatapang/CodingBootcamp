// UNFINISHED

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

function rehash(str) {
    const frequencyMap = {};
    let tempKey = "";
    let tempValue = "";
    for (let i = 0; i < str.length; i++) {
        let parsedCharacter = parseInt(str[i]);
        if (isNaN(parsedCharacter)) {
            if(frequencyMap.hasOwnProperty(str[i])) {
                frequencyMap[str[i]] += tempValue;
            }
            tempValue = "";
            tempKey = str[i];
            frequencyMap[str[i]] = 0;
        }
        if (!isNaN(parsedCharacter)) {
            tempValue += str[i];
            console.log("the tempValue is now " + tempValue);
        }
    }
    console.log(frequencyMap);
}

rehash(str1);
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");