const removeFromArray = function(array, ...parameters) {
    let originalArray = array;
    let itemsToBeRemoved = parameters;
    let originalArrayLength = array.length;
    let numberOfItems = parameters.length;
    for (let itemsCounter = 0; itemsCounter < numberOfItems; itemsCounter++) {
        for(let arrayCounter = 0; arrayCounter < originalArrayLength; arrayCounter++){
            if(itemsToBeRemoved[itemsCounter] === originalArray[arrayCounter]){
                originalArray.splice(arrayCounter, 1);
                arrayCounter--;
            }
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
