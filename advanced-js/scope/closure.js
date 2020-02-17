var bar = 'bar';
var count = 0;

function foo() {
  var count = 0;

  function fuz() {
    count = count + 1;
    console.log(count);
  }

  return fuz;
}

var fuz = foo();

fuz(); // 1
fuz(); // 2
fuz(); // 3

function boo() {
  fuz();
}

boo(); // 4

console.log(count); // 0

// window = {
//   bar,
//   count,
//   foo = {
//     count,
//     fuz = {}
//   }
//   fuz(),
//   boo = {
//     fuz()
//   }
// }

for(let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}



