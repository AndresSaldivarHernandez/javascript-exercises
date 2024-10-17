const convertToCelsius = function(tempInFahrenheit) {
  //formula that converts fahrenheit to celsius
  let fahrenheitToCelsius = ((tempInFahrenheit - 32)*5)/9;
  fahrenheitToCelsius = Number(fahrenheitToCelsius.toFixed(1));
  return fahrenheitToCelsius;

};

const convertToFahrenheit = function(tempInCelsius) {
  //formula that converts celsius to fahrenheit
  let celsiusToFahrenheit = ((tempInCelsius*9)/5)+32;
  celsiusToFahrenheit = Number(celsiusToFahrenheit.toFixed(1));
  return celsiusToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
