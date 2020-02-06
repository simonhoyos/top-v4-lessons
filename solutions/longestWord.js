function findLongestWordLength(str1){
  let words = str1.split(" ");
  let lengthWords = [];

  for (let i = 0; i < words.length; i++){
    let word = words[i];
    lengthWords.push(word.length);
  };

 return Math.max(...lengthWords);
};

// Math.max.apply(Math,array);

// Math.max(); // this = Math
// Math.max.apply(Math, [1, 2, 3, 4, 5]); // this = Math
// Math.max.call(Math, 1, 2, 3, 4, 5); // this = Math
