function Person(name, weight, height){
  this.name = name
  this.weight = weight
  this.height = height
}

Person.prototype.bmi = function(){
  return this.weight / Math.pow(this.height, 2);
}

Person.prototype.greet = function(person){
  return `Hi ${person.name} my name is ${this.name}`
}

module.exports = Person;
