const fs = require("fs");

const fileContent = fs.readFileSync("input4.txt", "utf-8");
const fileLines = fileContent.split(/\r?\n/);
// console.log(fileLines);

const areOverlappingAtAll = (firstPair, secondPair, count) => {
  const a1 = Number(firstPair[0]);
  const a2 = Number(firstPair[1]);
  const b1 = Number(secondPair[0]);
  const b2 = Number(secondPair[1]);

  if (a1 <= b1 && a2 >= b1) {
    return true;
  }
  if (a2 >= b2 && a1 <= b2) {
    return true;
  }
  if (a1 >= b1 && a2 <= b2) {
    return true;
  }
  return false;
};

const inputArray = fileLines.map((line) => {
  return line.split(",");
});

const boundaries = inputArray.map((pair) => {
  return { first: pair[0].split("-"), second: pair[1].split("-") };
});

const result = boundaries.reduce((acc, value) => {
  let isOverlappingResult = areOverlappingAtAll(value.first, value.second, acc);
  if (isOverlappingResult === true) {
    acc = acc + 1;
  }
  //   console.log(acc, isOverlappingResult);
  return acc;
}, 0);

console.log(result);
