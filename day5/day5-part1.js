const fs = require("fs");

const fileContent = fs.readFileSync("input5.txt", "utf-8");
const fileLines = fileContent.split(/\r?\n/);

console.log(fileLines);

const supplyStack = [
  ["S", "0", "0", "0", "0", "T", "Q", "0", "0"],
  ["L", "0", "0", "0", "B", "M", "P", "0", "T"],
  ["F", "0", "S", "0", "Z", "N", "S", "0", "R"],
  ["Z", "R", "N", "0", "R", "D", "F", "0", "V"],
  ["D", "Z", "H", "J", "W", "G", "W", "0", "G"],
  ["B", "M", "C", "F", "H", "Z", "N", "R", "L"],
  ["R", "B", "L", "C", "G", "J", "L", "Z", "C"],
  ["H", "T", "Z", "S", "P", "V", "G", "M", "M"],
];

const moves = fileLines.map((line) => {
  const actionArray = line.split(" ");
  return {
    quantity: Number(actionArray[1]),
    fromColumn: Number(actionArray[3]),
    toColumn: Number(actionArray[5]),
  };
});
// console.log({ moves, supplyStack });

let mockArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

for (let i = 0; i < moves.length; i++) {
  for (let j = 0; j < moves.quantity; i++) {
    console.log(supplyStack[i].fromColumn, 1, supplyStack[i][j]);
    mockArray.splice(supplyStack[i].fromColumn, 1, supplyStack[i][j]);
    supplyStack.unshift(mockArray);
    console.log(mockArray, supplyStack.flat());
  }
}
