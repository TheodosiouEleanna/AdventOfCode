const fs = require("fs");

const fileContent = fs.readFileSync("input6.txt", "utf-8");
const fileLines = fileContent.split(/\r?\n/);

const stringSequence = fileLines[0];
console.log(fileLines, stringSequence);

const hasRepeatedCharacters = (string) => {
  const charCounts = {};

  for (let i = 0; i < string.length; i++) {
    if (!charCounts[string[i]]) {
      charCounts[string[i]] = 1;
    } else {
      charCounts[string[i]] += 1;
    }
  }

  for (const char in charCounts) {
    if (charCounts[char] > 1) {
      return true;
    }
  }

  return false;
};

const setMarkerOnFourDifferentCharacters = (string) => {
  let charArray = [];
  let arrayOfDiff = [];
  let marker = null;

  for (let i = 0; i < string.length; i++) {
    charArray = stringSequence.slice(i, i + 4).split("");
    console.log(charArray);
    if (hasRepeatedCharacters(charArray)) {
      continue;
    } else {
      arrayOfDiff = charArray;
      marker = i;
      console.log(arrayOfDiff);
      break;
    }
  }

  return marker;
};

console.log(setMarkerOnFourDifferentCharacters(stringSequence));
