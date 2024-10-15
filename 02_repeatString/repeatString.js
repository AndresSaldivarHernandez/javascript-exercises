const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    else {
        let repeatedString = "";
        for (let counter=0; counter < num; counter++) {
            repeatedString += string;
        }
        return repeatedString;
    }
};
// Do not edit below this line
module.exports = repeatString;
