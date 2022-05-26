//alternative syntax for module exports

module.exports.items = ['item1','item2']
const person = {
    name: 'bob',
}

//or
module.exports.singlePerson = person
// could also be module.exports.person = {...}