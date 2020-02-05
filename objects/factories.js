/**
 * {
 *  name,
 *  age
 * }
 */

function createPerson(name, age) {
  return {
    name: name,
    age: age
  };
}

// const person1 = {
//   name: 'Simon',
//   age: 28
// };
const person1 = createPerson('Simon', 28);
console.log(person1.height);

// const person2 = {
//   name: 'Juan',
//   age: 16,
// };
const person2 = createPerson('Juan', 16);

// const person3 = {
//   name: 'Maria',
//   age: 30
// };
const person3 = createPerson('Maria', 30);

