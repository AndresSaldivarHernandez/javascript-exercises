const leapYears = function(year) {
    let isDivisibleBy4 = (year % 4 == 0);
    let isDivisibleBy100 = (year % 100 == 0 );
    let isDivisibleBy400 = (year % 400 == 0);
    let isLeapYear = true;

    if(isDivisibleBy4 && !isDivisibleBy100){
        isLeapYear = true;
        return isLeapYear;
    } else {
        if(isDivisibleBy100 && isDivisibleBy400) {
            isLeapYear = true
        } else {
            isLeapYear = false;
        }
    }

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
