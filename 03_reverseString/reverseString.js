const reverseString = function(string) {
    let stringArray = Array.from(string);
    let arrayLength = stringArray.length;
    let reversedArray = [];
    for (counter = arrayLength; counter >= 0; counter--) {
        reversedArray.push(stringArray[counter]);
    }
    let reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
