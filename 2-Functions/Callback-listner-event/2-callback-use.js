
const fs = require('fs')

const print = (err, data) => {
  if (err) throw new Error('Can not read file')
  const result = data.toString().split('\n')
  result.forEach(el => console.log(el))
  // console.log({
  //   lines: data
  //   .toString()
  //   .split('\n')
  //   .length
  // });
}

fs.readFile('./1-callback.js', 'utf8', print)

console.log('end');
