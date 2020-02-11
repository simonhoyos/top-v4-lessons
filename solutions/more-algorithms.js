function addNumsArray(list){
  if(list[0] === undefined) return 0;

  return list[0] + addNumsArray(list.slice(1));
}

console.log(addNumsArray([1, 2, 3, 4]));

function addNumsNestedArray(list){
  const[first,...rest] = list;
  if(first === undefined) return 0
  if (Array.isArray(first)) {
    return addNumsNestedArray([...first,...rest])
  }

  return first + addNumsNestedArray(rest);
}

console.log(addNumsNestedArray([1, [2, 3], 4]));

function harmonicSum (num) {
  if ( num > 0) {
    return (1/num) + (harmonicSum (num - 1));
  }

  return false;
} 

console.log(harmonicSum(2));
