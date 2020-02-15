function isUgly(num) {
  let reminder = num;

  while(reminder % 2 === 0) {
    reminder = reminder / 2;
  }

  while(reminder % 3 === 0) {
    reminder = reminder / 3;
  }

  while(reminder % 5 === 0) {
    reminder = reminder / 5;
  }

  return reminder === 1;
}

function uglyNumbers(num) {
  let count = 1;
  let currentNumber = 1;

  while(count < num) {
    currentNumber++;
    if(isUgly(currentNumber)) {
      uglyNums.push(currentNumber);
      count++;
    }
  }

  return currentNumber;
}

console.log(uglyNumbers(11));
console.log(uglyNumbers(12));
