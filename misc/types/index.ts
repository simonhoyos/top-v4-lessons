// var num:number = 'num'; // Error
var num:string|number = 'num';
num = 1;
// num = true;

let categories:[string, number] = ['Simon', 1];

// categories = undefined; // Error type

categories.map((el) => el); // Error map is not a function

function sum(a:number = 0, b:number = 0):number {
  return a + b;
}

sum(1, 2);
