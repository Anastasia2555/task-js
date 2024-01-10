// String: greeting
let userName = prompt("Введіть ваше ім'я");
alert("Привіт, " + userName + "!");

// String: gopni4ek
let userInput = prompt("Введіть рядок через кому");
let modifiedString = userInput.split(',').join(' блін, ');
console.log(modifiedString);

// String: capitalize
let str = "cANBerRa";
let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(result); // Canberra

// String: word count
let inputString = prompt("Введіть рядок для підрахунку слів");
let wordCount = inputString.split(' ').length;
console.log(wordCount);

// String: credentials
let firstName = prompt("Введіть ім'я");
let lastName = prompt("Введіть прізвище");
let middleName = prompt("Введіть по батькові");

let fullName = `${firstName.trim()} ${lastName.trim()} ${middleName.trim()}`.replace(/\b\w/g, l => l.toUpperCase());
console.log(fullName);

// String: beer
let strWithBeer = "Було жарко. Василь пив пиво вприкуску з креветками";
let resultWithoutBeer = strWithBeer.split('пиво').join('чай');
console.log(resultWithoutBeer);

// String: no tag
let strWithHtmlTag = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tagIndex = strWithHtmlTag.indexOf('<');
let resultWithoutTag = strWithHtmlTag.slice(0, tagIndex) + strWithHtmlTag.slice(tagIndex + 4);
console.log(resultWithoutTag);

// String: big tag
let strWithBigTag = "якийсь текст у якому є один тег <br /> і всяке інше";
let tagIndexForBig = strWithBigTag.indexOf('<');
let resultWithBigTag = strWithBigTag.slice(0, tagIndexForBig) + strWithBigTag.slice(tagIndexForBig, tagIndexForBig + 3).toUpperCase() + strWithBigTag.slice(tagIndexForBig + 3);
console.log(resultWithBigTag);

// String: new line
let multiLineString = prompt("Введіть рядок з можливістю нового рядка (використовуйте \\n)");
let formattedString = multiLineString.split('\\n').join('\n');
console.log(formattedString);

// String: youtube
const youtubeLinkRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

let userTextWithYoutubeLink = prompt("Введіть текст із посиланням на YouTube");
let videoIdMatch = userTextWithYoutubeLink.match(youtubeLinkRegex);
let videoId = videoIdMatch ? videoIdMatch[1] : null;

if (videoId) {
    let embeddedVideoCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    document.write(embeddedVideoCode);
} else {
    console.log("Немає валідного посилання на YouTube в тексті.");
}
