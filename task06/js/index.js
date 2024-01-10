// Confirms
const confirmArray = [
    confirm("Do you like JavaScript?"),
    confirm("Have you ever used arrays?"),
    confirm("Is coding fun for you?")
];

// Prompts
const promptArray = [];
promptArray[0] = prompt("What is your favorite programming language?");
promptArray[1] = prompt("How many programming languages do you know?");
promptArray[2] = prompt("What is your preferred text editor?");

// Item access
const indexToAccess = prompt("Enter an index to access in the array:");
const accessedItem = promptArray[indexToAccess];
alert(`The value at index ${indexToAccess} is: ${accessedItem}`);

// Item change
const indexToChange = prompt("Enter an index to change in the array:");
const valueToAssign = prompt("Enter a value to assign to the selected index:");
promptArray[indexToChange] = valueToAssign;
alert(`The array after the change: ${promptArray}`);

// Multiply table
const multiplyTable = [];
for (let i = 1; i <= 5; i++) {
    const innerArray = [];
    for (let j = 1; j <= 5; j++) {
        innerArray.push(i * j);
    }
    multiplyTable.push(innerArray);
}

// Multiply table slice
const slicedMultiplyTable = multiplyTable.map(row => row.slice(1));

// IndexOf Word
const userWords = prompt("Enter a string with multiple words:").split(' ');
const searchWord = prompt("Enter the word to find:");
const wordIndex = userWords.indexOf(searchWord);

if (wordIndex !== -1) {
    alert(`The word "${searchWord}" is at position ${wordIndex + 1} in the string.`);
} else {
    alert(`The word "${searchWord}" is not found in the string.`);
}

// Reverse
const userElements = [];
for (let i = 0; i < 5; i++) {
    userElements.push(prompt("Enter an element:"));
}
const reversedArray = [];
while (userElements.length > 0) {
    reversedArray.push(userElements.pop());
}

// Reverse 2
const reversedArray2 = [];
while (reversedArray.length > 0) {
    reversedArray2.unshift(reversedArray.shift());
}

// Copy
const shallowCopy = [...multiplyTable];

// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(multiplyTable));

// Array Equals
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arraysAreEqual = JSON.stringify(arr1) === JSON.stringify(arr2);

// Flat
const flattenedArray = [].concat(...multiplyTable);

// Destruct
const userString = prompt("Enter a string:");
const [firstLetter, fifthLetter, ninthLetter] = userString;

// Destruct default
const [secondLetter = '!', fourthLetter = '!', fifthLetterDestruct] = userString;

// Multiply table rest
const [firstRow, secondRow, thirdRow, fourthRow] = slicedMultiplyTable;

// For Alert
const namesForAlert = ["John", "Paul", "George", "Ringo"];
for (const name of namesForAlert) {
    alert(name);
}

// For Select Option
const currenciesForSelect = ["USD", "EUR", "GBP", "UAH"];
let selectHtml = "<select>";
for (const currency of currenciesForSelect) {
    selectHtml += `<option>${currency}</option>`;
}
selectHtml += "</select>";
document.write(selectHtml);

// For Table Horizontal
const namesForTableHorizontal = ["John", "Paul", "George", "Ringo"];
let tableHorizontalHtml = "<table><tr>";
for (const name of namesForTableHorizontal) {
    tableHorizontalHtml += `<td>${name}</td>`;
}
tableHorizontalHtml += "</tr></table>";
document.write(tableHorizontalHtml);

// For Table Vertical
const namesForTableVertical = ["John", "Paul", "George", "Ringo"];
let tableVerticalHtml = "<table>";
for (const name of namesForTableVertical) {
    tableVerticalHtml += `<tr><td>${name}</td></tr>`;
}
tableVerticalHtml += "</table>";
document.write(tableVerticalHtml);

// For Table Letters
const currenciesForTableLetters = ["USD", "EUR", "GBP", "UAH"];
let tableLettersHtml = "<table>";
for (const currency of currenciesForTableLetters) {
    tableLettersHtml += "<tr>";
    for (const letter of currency) {
        tableLettersHtml += `<td>${letter}</td>`;
    }
    tableLettersHtml += "</tr>";
}
tableLettersHtml += "</table>";
document.write(tableLettersHtml);

// For Multiply Table
let multiplyTableForHtml = "<table>";
for (const row of multiplyTable) {
    multiplyTableForHtml += "<tr>";
    for (const cell of row) {
        multiplyTableForHtml += `<td>${cell}</td>`;
    }
    multiplyTableForHtml += "</tr>";
}
multiplyTableForHtml += "</table>";
document.write(multiplyTableForHtml);

// Function Capitalize
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const capitalizedWord = capitalize("cANBerRa");
console.log(capitalizedWord);

// Map Capitalize
const userSentence = prompt("Enter a sentence:");
const capitalizedSentenceArray = userSentence.split(' ').map(word => capitalize(word));
const capitalizedSentence = capitalizedSentenceArray.join(' ');

// Filter Lexics
const lexicsToFilter = ["bad", "worse", "terrible"];
const userWordsFiltered = userSentence.split(' ').filter(word => !lexicsToFilter.includes(word)).join(' ');

// Beep Lexics
const userWordsBeeped = userSentence.split(' ').map(word => lexicsToFilter.includes(word) ? "BEEP" : word).join(' ');

// Reduce HTML
const currenciesForReduce = ["USD", "EUR", "GBP", "UAH"];
const selectHtmlReduce = currenciesForReduce.reduce((html, currency) => html + `<option>${currency}</option>`, "<select>") + "</select>";
document.write(selectHtmlReduce);

// For Brackets Hell Check
const lineForBrackets = prompt("Enter a string with brackets:");
const bracketsStack = [];
let i = 0;
for (const character of lineForBrackets) {
    if ("{[(".includes(character)) {
        bracketsStack.push(character);
    } else if ("}])".includes(character)) {
        const lastBracket = bracketsStack.pop();
        if (!lastBracket || !"{[(".includes(lastBracket) || !areBracketsMatching(lastBracket, character)) {
            alert(`Error: Mismatched brackets at position ${i + 1}`);
            break;
        }
    }
    i++;
}

function areBracketsMatching(openingBracket, closingBracket) {
    return (openingBracket === "{" && closingBracket === "}") ||
        (openingBracket === "[" && closingBracket === "]") ||
        (openingBracket === "(" && closingBracket === ")");
}
