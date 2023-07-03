// ESM Syntax
// import { v4 as uuidv4 } from 'uuid';

// CommonJS syntax
// const uuidv4 = require('uuid').v4;
const people = require('./person');

console.log('bonjour');

console.log(people);

console.log(people.person1.fullName);
