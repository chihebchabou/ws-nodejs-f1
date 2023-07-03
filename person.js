// Dependecies
const uuidv4 = require('uuid').v4;

const person1 = {
  id: uuidv4(),
  fullName: 'John Doe',
  age: 30,
};

const person2 = {
  id: uuidv4(),
  fullName: 'Jane Doe',
  age: 25,
};

// CommonJS Syntax
// module.exports.person1 = person1;
// module.exports.person2 = person2;

module.exports = { person1, person2 };
