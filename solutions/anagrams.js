function anagrama (s1, s2){
  var anamg = s1.toLowerCase().split("").sort().join("")
  var anamg2 = s2.toLowerCase().split("").sort().join("")
  if (anamg === anamg2){
    return true;
  }

  return false;
};
console.log(anagrama("anagram", "nagaram")); // true
console.log(anagrama("hello", "world")); // false
