const myRegex = /\(\d{3}\)\s\d{3}\-\d{3}/gi
// const myRegex = new RegExp('\(\d{3}\)\s\d{3}\-\d{3}', 'gi');

console.log(myRegex.test('(310) 234-4351'));
console.log(myRegex.test('Hola mundo'));


console.log('hola mundo'.match(/hola/));
