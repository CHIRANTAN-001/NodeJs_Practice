const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

const a = fs.readFileSync('file.txt')
console.log(a.toString());

console.log("finished reading file")