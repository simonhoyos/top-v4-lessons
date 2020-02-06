const arr = [1, 2, 3, 4, 5, 6];

// map, filter, forEach, every, some
arr.map(currentValue => currentValue * 2);
arr.filter(currentValue => currentValue % 2 === 0);

// reduce y reduceRight
arr.reduce((acc, currentValue => acc + currentValue, 0);

