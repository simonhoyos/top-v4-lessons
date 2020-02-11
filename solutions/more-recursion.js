// Flatten Array

// Write a function called flatten that receives an array of arrays and returns a flattened array.

// O(n)
// function flatten(list) {
//   const [first, ...rest] = list;

//   if(first === undefined) return [];
//   if(Array.isArray(first)) {
//     return flatten([ ...first, ...rest ]);
//   }

//   return [first].concat(flatten(rest));
// }

// O(n^2)
function flatten(array) {
  let newArray = [];
  array.map(obj => {
    Array.isArray(obj) ? newArray.push(...obj) : newArray.push(obj);
  });

  if (array.every(obj => !Array.isArray(obj))) return newArray;
  return flatten(newArray);
}

// Array.isArray(...[1, [1.1], 2, 3, 4, 5]);
// Array.isArray(1);

// Array.isArray(...[[1, [1.1]], 2, 3, 4, 5]);
// Array.isArray([1, [1.1]]);

console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]

// Binary Search

// Write a function called binarySearch that receives two arguments: an array of ordered numbers and an number. The function returns true if the second argument is on the array, false otherwise.

// Implement the algorithm described here.

// What is the complexity of this algorithm?

function binarySearch(list,num){
  let i = Math.floor(list.length / 2);
  if(list.length <= 0) return false;
  else{
    if(list[i] === num) {
      return true;
    }
    else if(list[i] > num) {
      list = list.slice(0, i);
      return binarySearch(list,num)
    }
    else if(list[i] < num) {
      list = list.slice(i + 1);
      return binarySearch(list,num)
    }
  }
}

