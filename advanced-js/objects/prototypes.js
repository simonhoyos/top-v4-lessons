// Funcion constructora
function Person(name) {
  this.name = name;
}

function Triangle(base, height) {
  this.base = base;
  this.height = height;
}

// Instancia
const person1 = new Person('Simon');
const person2 = new Person('Maria');
const person3 = new Person('Juan');

console.log(person1);
person1.height

Triangle.prototype.area = function() {
  return this.base * this.height / 2;
}

console.log(Triangle.prototype);

const triangle1 = new Triangle(3, 1);
console.log(triangle1.area());

Array.prototype.map = function() {
  console.log('Hola map');
}

const array = [1, 2, 3]
array.map();

function Player(name) {
  this.name = name;
}

Player.prototype.greet = function() { }

const p = new Player('Pedro')
