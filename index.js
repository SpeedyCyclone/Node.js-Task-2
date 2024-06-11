const { readFileSync } = require("fs");

function checker(string) {
  const contents = readFileSync("example.txt", "utf-8");
  return contents.includes(string);
}

var word = process.argv[2];
console.log(checker(word));
