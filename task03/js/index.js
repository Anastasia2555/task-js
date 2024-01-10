// assign: evaluation
let a = 5;
let b, c;

b = (a * 5);
b = (c = b/2);


// Number: age
let age = prompt("Enter your age");
let birthYear = new Date().getFullYear() - age;
alert("Your birth year: " + birthYear);

// Number: temperature
let celsiusTemperature = prompt("Enter temperature in Celsius");
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
alert("Temperature in Fahrenheit: " + fahrenheitTemperature);

// Number: divide
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let result = Math.floor(num1 / num2);
alert("Result of integer division: " + result);

// Number: currency
const rate = prompt("Enter the currency exchange rate");
let amount = prompt("Enter the amount in one currency");
let resultCurrency = (amount / rate).toFixed(2);
alert("Amount in another currency: " + resultCurrency);

// Number: RGB
let red = prompt("Enter value for red color (0-255)");
let green = prompt("Enter value for green color (0-255)");
let blue = prompt("Enter value for blue color (0-255)");

let hexColor = "#" + decToHex(red) + decToHex(green) + decToHex(blue);
alert("CSS color: " + hexColor);

function decToHex(decimal) {
    let hex = parseInt(decimal).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

// Number: flats
let floors = prompt("Enter the number of floors in the building");
let flatsPerFloor = prompt("Enter the number of flats per floor");
let flatNumber = prompt("Enter the flat number");

let entrance = Math.ceil(flatNumber / (floors * flatsPerFloor));
let floorInEntrance = Math.ceil((flatNumber % (floors * flatsPerFloor)) / flatsPerFloor);

alert("Entrance: " + entrance + ", Floor: " + floorInEntrance);
