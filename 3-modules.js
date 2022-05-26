const names = require('./4-names');
const sayHi = require('./5-utils')

const data = require('./6-alt-flavor');
require('./7-mind-grenade')
//even though we didn't assign the above function to a variable it will still run as it is a function inside a module that was imported. the function has to be executed in its module though
sayHi('susan')
sayHi(names.john) //property names
sayHi(names.peter)