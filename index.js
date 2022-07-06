const {readFileSync, promises: fsPromises} = require('fs');

function checker(example, string) {
  const contents = readFileSync(example, 'utf-8');

  const result = contents.includes(string);

  return result;
}

var word = process.argv[2];
console.log(checker('./example.txt', word));