// Variables

var a = 1;

// por

let b = 2;
const c = 3

// Funciones flecha

function something(a, b) {
  return a;
}

// por
const something = (a, b) => {
  return a;
}

// o

const something = (a, b) => a;

// Parametros por defecto
function doSomething(arg1) {
  if (arg1 === undefined) {
    arg1 = 'Pedro';
  }

  return arg1;
}

// por
const doSomething = (arg1 = 'Pedro', arg2) => arg1;

// Plantillas literales

`Hola mundo
de varias lineas`

const name = 'Maria'

const getName = () => 'Simon';

`Hola ${name}, mi nombre es ${getName()}`


// Destructuraciónn
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const a = obj.a;
const b = obj.b;
const c = obj.c;
const d = obj.d;

// por

const { a, b, c, d } = obj;

const arr = [ 1, 2, 3, 4];

const first = arr[0];
const second = arr[1];
const third = arr[2];

// por

const [ first, second, third ] = arr;

// Destructuración de argumentos
function Person({ name, age }) {
  this.name = name;
  this.age = age
}

// los tres puntos ( spread operator)

function Person(name, age, ...rest) {
  this.name = name;
  this.age = age;
  console.log(rest); // [ arg3, arg4, ... ]
}

// Aplanando un arreglo

const flatten = [ 1, 2, 3, 4, 0];

console.log(flatten);
console.log(...flatten);

console.log(Math.min(...flatten));

// Métodos concisos e inicialización de objetos
const obj = {
  a: 1,
  getName: function() {
    // do something
  }
}

// por

const obj = {
  a: 1,
  getName() {
    //do something
  }
}


function createPerson(name, age) {
  return {
    name: name,
    age: age
  }

  //por

  return { name, age };
}

// Clases
function Rectangle(base, side) {
  this.base = base;
  this.side = side;
}

Rectangle.prototype.area = () => this.base * this.side;

// por

class Rectangle {
  constructor(base, side) {
    this.base = base;
    this.side = side;
  }

  area() {
    return this.base * this.side;
  }
}

// herencia

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

// modulos

// Un solo modulo
module.exports = Person;
const Person = require('./index');

// Multiples modulos
module.exports = {
  Person,
  Hotel
}
const { Person, Hotel } = require('./index');

// por

// un solo modulo
export default Person;
import Person from './index';

// multiples modulos
export const Person = 'a'
export function Hotel() {
  // do something
}
import { Person, Hotel } from './index';










