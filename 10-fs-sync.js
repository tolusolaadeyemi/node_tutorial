//nodejs built in modules: fs (filesystem)
//synchronous (blocking) approach, one-by-one, the code runs every line before starting again, will make app slow with multiple users

//methods to read and write to files
const {readFileSync, writeFileSync} = require('fs');
// same method as const file = fs.readFileSync()
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
// console.log(first,second);

// writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`)

//to append to the file you need to pass one more argument (flag)
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`, {flag: 'a'})
console.log('done with this task')
console.log('starting the next one')