// Print Numbers Backwards

// Write a function called printNumsBackwards that receives a number and prints all the numbers from the number to 1. Print each number in a new line.

function printNumsBackwards( num ){
  while( num >= 1 ){
    console.log(num);
    num --;
  }
}

function printNumbersBackwards(num){
  for(let i = num; i > 0; i--){
    console.log(i)
  }
}

function printNumbersBackwards(num) {
  if(num <= 0) return;

  console.log(num);
  printNumbersBackwards(num--);
}

printNumsBackwards(10); // prints 10 to 1
printNumsBackwards(500); // prints 500 to 1

// Print Numbers

// Write a function called printNumbers that receives a number and prints all the numbers from 1 to N. Print each number in a new line.

function printNumbers(num){
  for(let i = 0; i < num; i++){
    console.log(i)
  }
}

function printNumbers(num) {
  if(num <= 0) return;

  printNumbers(num--);
  console.log(num);
}

// printNumbers(3);
//  printNumbers(2);
//    printNumbers(1);
//      printNumbers(0);

printUpTo(10); // prints 1 to 10
printUpTo(500); // prints 1 to 500

// Fibonacci

// Write a function called fibonacci that receives a number and returns the n number of the fibonacci sequence.

function fibonacci (num){
  let a = 1;
  let b = 0;

  while ( num >= 0 ){
      let temporal = a;
      a = a + b;
      b = temporal
      num --
  }
  return b
}

function fibonacci(n){
  let j = 1;
  let k = 0;
  let l = 0;
  for (i=0;i<n;i++){
      j=k+l+j;
      m=j;
      console.log(m)
      k=l;
      l=j;
      j=0
  }
  return m
}

function fibonacci(num){
  if(num <= 1) {
    return 1
  }

  return fibonacci(num-2) + fibonacci(num-1)
}

console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 5
console.log(fibonacci(5)); // 8

// Factorial

// Write a function called factorial that receives a number and returns the factorial of the number. The factorial is the multiplication of every positive number up to the number. For example, the factorial of 5 is 120 because 5 * 4 * 3 * 2 * 1 = 120.

function factorial(num) {
  if(num <= 1) return num;

  return num * factorial(n--);
}

