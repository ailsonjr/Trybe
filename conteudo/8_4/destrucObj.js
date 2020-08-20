const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

//Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

//Maneira convencional
var today = HIGH_TEMPERATURES.today;
var tomorrow = HIGH_TEMPERATURES.tomorrow;
console.log(`
The temperature today is ${today} and tomorrow is ${tomorrow}`);

//Usando destructuring
var {today} = HIGH_TEMPERATURES;
var {tomorrow} = HIGH_TEMPERATURES;
console.log(`
Using destructuring: The temperature today is ${today} and tomorrow is ${tomorrow}`);

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

//Maneira convencional
var highToday = HIGH_TEMPERATURES.today;
var highTomorrow = HIGH_TEMPERATURES.tomorrow;
console.log(`
The high temperature today is ${highToday} and tomorrow is ${highTomorrow}`);

var {today: highToday} = HIGH_TEMPERATURES;
var {tomorrow: highTomorrow} = HIGH_TEMPERATURES;
console.log(`
Using destructuring: The high temperature today is ${highToday} and tomorrow is ${highTomorrow}`);

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

//Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

//Método convencional  
var lowToday = LOCAL_FORECAST.today.low;
var highToday = LOCAL_FORECAST.today.high;

var { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;