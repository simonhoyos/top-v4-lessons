const person = {
  name: 'Simon',
  age: 28,
  height: 1.7,
  weight: 65
};

const objectKeys = Object.keys(person);

for(let i = 0; i <= objectKeys.length; i++) {
  const key = objectKeys[i];
  console.log(person[key]);
}

for(let key in person) {
  console.log(person[key])
}
