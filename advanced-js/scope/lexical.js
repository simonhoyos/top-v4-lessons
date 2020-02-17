// Lexical Scope
// Hoisting
// Closures: la función recuerda el lexical scope aún si es llamada por fuera del lexical scope

var a = 'a';
// var b;
// var g;
let c;
var fuz;

foo();

var b = 'b';
c = 'c';

foo();
// fuz(); // Error fuz is not a function
// boo(); // Error boo is not defined

if(true) {
  var g = 'g';
}

function foo() {
  var d = 'd'
  console.log(b); // undefined
  console.log(c); // Error: not defined
}

function bar() {
  var f = 'f'
  console.log(d);
}

fuz = function() {
  console.log('fuz');
}

const boo = () => {
  console.log('boo');
}
