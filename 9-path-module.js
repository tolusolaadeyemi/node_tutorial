//nodejs built in modules: path
const path = require('path');

//seperator property returns platform specific seperator
console.log(path.sep);

//join method joins a sequence of path segments using '/' as the limiter and it returns a normalized resulting path

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);

//basename method: returns the base file/folder
const base = path.basename(filePath)
console.log(base);

//resolve method returns an absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);