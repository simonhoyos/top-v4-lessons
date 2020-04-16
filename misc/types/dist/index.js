"use strict";
// var num:number = 'num'; // Error
var num = 'num';
num = 1;
// num = true;
let categories = ['Simon', 1];
// categories = undefined; // Error type
categories.map((el) => el); // Error map is not a function
function sum(a = 0, b = 0) {
    return a + b;
}
sum(1, 2);
