function foo(arg1) {
  console.log(this.bar, 'arg: ', arg1);
}

const foo2 = () => {
  console.log(this.bar);
}

// 4. por defecto, this es el scope global si no estoy stric mode
console.log('Global Context')
// node -> global = {}
global.bar = 'global bar';
// navegador -> window = {}
// window.bar = 'window bar'

foo('hola global context'); // global bar

// 3. si lo configuramos en el contexto de un objeto el this es el objeto
console.log('\nObject Context');
const obj = {
  foo, // implicit binding
  bar: 'object context bar',
};

obj.foo('hola object contex'); // object context bar

// 2. relacionar la función explicitamente con un objeto
console.log('\nBinding Context');
const obj2 = {
  bar: 'binding context'
};

foo.call(obj2, 'hola call', 'arg2', 'arg3'); // binding context
foo.apply(obj2, ['hola apply', 'arg2', 'arg3']); // binding context
obj.foo.call(obj2); // binding context

console.log('\nHard binding');
const obj3 = {
  bar: 'hard context binding'
}

// function fuz() {
//   foo.call(obj3)
// }
const fuz = foo.bind(obj3, 'hola bind', 'arg2', 'arg3');

fuz(); // hard context bindig
fuz.call(obj2); // hard context binding

// 1. New
console.log('\nConstructor Function')
function Person(name, age) {
  // this = {
  //   constructor: Person,
  //   name: 'Maria',
  //   age: 25
  // };

  this.name = name;
  this.age = age;

  return this;
}

console.log('--- Without new Keyword');
Person('simon', 28);
// global.name = 'simon';
// global.age = 28;
console.log(global.name); // simon
console.log(global.age); // 28

console.log('--- With new Keyword');
const person = new Person('Maria', 25);
// 1. crea un objeto vacio.
// 2. relaciona ese objeto con un constructor.
// 3. le asigna a this ese objeto.
// 4. si la función está retornando un objeto, retorna ese objeto y si no retorna this.
console.log(person.name);
console.log(person.age);
console.log(person.constructor);


const book = {
  content: "Así comienza el libro",
  numWords() {
    return this.content.split(" ").length
  }
}

const words = book.numWords.call({ body: "Otro libro" });
console.log(`El libro tiene ${words} palabras`)

