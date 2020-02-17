const person = {
  name: 'Simon',
  age: 28,
  titles: ['business', 'programming'],
  'con espacios': true,
  greet: function(person) {
    return 'hola ' + person;
  }
};

//Leer propiedades

person.name // Simon
person.age // 28

person['name'] // Simon

const property = 'age';

person[property] // 28
person['con espacios'] // true

// Crear nuevas propiedades

person.newProperty = false;
person['new property'] = 5;

// Modificar propiedades

person.name = 'Juan';

// Elimar propiedad

delete person.name;

// Ejecutar un método

console.log(person.greet('Pedro'));
