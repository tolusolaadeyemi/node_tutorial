// modules - encapsulated code (only share minimum in exporting object)
// node uses CommonJS library, so every file in  node is a module (by default)

// share with entire directory
const john = 'john'
const peter = 'peter'

// local to this file
const secret = 'SUPER_SECRET' //like env variable python

module.exports = { john, peter }
// syntax for choosing which variables (as well as other values) to export 