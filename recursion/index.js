// sumar todos los números desde el argumento hasta 1.

// 10 + sum(9);
// 9 + sum(8)
// 8 + sum(7)
// ....

// casos triviales: los casos en los que el código debe parar su ejecución.
// casos generales: los casos en los que si se debe correr el codigo.
// Verificar que el argumento que se pasa recursivamente siempre sea diferente.

function sum(num) {
  if(num <= 1) {
    return num;
  }

  return num + sum(num - 1);
}

function sum(num) {
  let result = 0;

  for(let i = num; num <= 1; i--) {
    result += i;
  }

  return result;
}

// sum(5) // 5 + 10 = 15
//  sum(4) // 4 + 6 = 10
//    sum(3) // 3 + 3 = 6
//      sum(2) // 2 + 1 = 3
//        sum(1) // 1
// Pila - Call Stack (PEUS)
