function chunk(array, num){
  let newArray=[];

  for(let i=0;i<array.length;i+=num){
    newArray.push(array.slice(i,i+num));
  };

  return newArray;
}

function chunk(arr,num){
  let result = [];

  if ((arr.length / num) < 1) {
    // el arreglo es más corto que el número
    result.push(arr);
  } else {
    // el número de arreglos
    let arrNum = Math.round(arr.length / num);
    // posicion inicial del sub arreglo
    let posIn = 0;
    // posicion final del sub arreglo
    let posFi = num;

    for(let i = 0; i < arrNum; i++) {
      result.push(arr.slice(posIn,posFi));
      posIn = posIn + num;
      posFi = posFi + num;
    }
  }
  return result;
};

console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
