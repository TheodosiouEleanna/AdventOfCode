const fs = require("fs");

const fileContent = fs.readFileSync("input5.txt", "utf-8");
const fileLines = fileContent.split(/\r?\n/);

// console.log(fileLines);

const moves = fileLines.map((line) => {
  const actionArray = line.split(" ");
  return [
    Number(actionArray[1]),
    Number(actionArray[3]),
    Number(actionArray[5]),
  ];
});

const supplyStack = [
  ["S", "L", "F", "Z", "D", "B", "R", "H"],
  ["R", "Z", "M", "B", "T"],
  ["S", "N", "H", "C", "L", "Z"],
  ["J", "F", "C", "S"],
  ["B", "Z", "R", "W", "H", "G", "P"],
  ["T", "M", "N", "D", "G", "Z", "J", "V"],
  ["Q", "P", "S", "F", "W", "N", "L", "G"],
  ["R", "Z", "M"],
  ["T", "R", "V", "G", "L", "C", "M"],
];

const moveItems = (items, from, to) => {
  for (let i = 0; i < items.length; i++) {
    if (from.includes(items[i])) {
      from.splice(0, 1);
      to.unshift(items[i]);
    }
  }
  return { from, to };
};

// for (let i = 0; i < 5; i++) {
for (let i = 0; i < moves.length; i++) {
  const numberOfMoves = moves[i][0];
  const arrayFrom = supplyStack[moves[i][1] - 1];
  const arrayTo = supplyStack[moves[i][2] - 1];

  let itemsToMove = [];
  for (j = 0; j < numberOfMoves; j++) {
    itemsToMove.push(arrayFrom[j]);
  }
  console.log(itemsToMove, arrayFrom, arrayTo);
  console.log("-----------------------------");

  const { from, to } = moveItems(itemsToMove, arrayFrom, arrayTo);
  console.log({ from, to });

  supplyStack[moves[i][1] - 1] = from;
  supplyStack[moves[i][2] - 1] = to;
}

const finalTopItems = supplyStack
  .reduce((acc, itemArray) => {
    return [...acc, itemArray[0]];
  }, [])
  .join("");

console.log(supplyStack, finalTopItems);
