const set = new Set();

console.log(set.add(1));
console.log(set.add(1));
console.log(set.add(2));
console.log(set.add(3));
console.log(set.add(4));
console.log(set.add(5));
console.log(set.add([]));
console.log(set.add({}));
console.log(set.add('una cadena'));
console.log(set.add(new Set()));
console.log(set);
console.log(set.delete(1));
console.log(set);
console.log(set.has(3));
console.log(set.has(1));
console.log(set.size);
