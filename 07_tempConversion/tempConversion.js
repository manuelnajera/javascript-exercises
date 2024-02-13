const convertToCelsius = function(fahrenheitInput) {
  let celsiusOutput;
  if (typeof fahrenheitInput !== "number"){
    return "ERROR";
  }
celsiusOutput = (fahrenheitInput -32) * (5/9);
celsiusOutput = Number(celsiusOutput.toFixed(1).replace(/[.]00$/,""));

return celsiusOutput;

};

const convertToFahrenheit = function(celsiusInput) {
  let fahrenheitOutput;
  if (typeof celsiusInput !== "number"){
    return "ERROR";
  }

 fahrenheitOutput = (celsiusInput * (9/5)) + 32;
 fahrenheitOutput = Number(fahrenheitOutput.toFixed(1).replace(/[.,]00$/, "")); 
 
return fahrenheitOutput;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
