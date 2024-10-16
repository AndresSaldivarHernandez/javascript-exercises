const sumAll = function(firstNum, secondNum) {
    let isValidInput = (Number.isInteger(firstNum) && Number.isInteger(secondNum));
    let isPositive = (firstNum > 0 && secondNum > 0);
    if (isValidInput && isPositive){
        let largerNum = 0;
        let smallerNum = 0;
        if (secondNum > firstNum) {
            largerNum = secondNum;
            smallerNum = firstNum;
        } else {
            smallerNum = secondNum;
            largerNum = firstNum;
        }
        
        //Formula for sum between two integers, inclusive
        let finalNum = ((largerNum + smallerNum)*(largerNum-smallerNum+1))/2;
        return finalNum;
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;