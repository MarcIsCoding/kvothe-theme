export default async function unreachableCode() {
  return 10;
}

const age = 100;
const myObj = {
  prop: 12,
  nested: {
    prop: 100,
  },
  initialAge: age,
  age,
};

const age = 100;

const something = {
  age: 100,
  name: `something`,
};

console.log(something.cool);
console.log(something.cool);

console.log(something.age);
console.log(something.doesNotExist);

const usedAge = 200;
console.log(usedAge);

// This is a single line comment

/**
 * This is a multi-line comment with JSDoc
 * @param {string} name
 * @returns {string}
 */

/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 * @property {string} [job]
 */

/**
 * @type {Person}
 */
const person = {
  name: `something`,
  age: 100,
};

console.log(person.age);
console.log(person.doesNotExist);
