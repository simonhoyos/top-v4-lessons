function Square(side){
  this.side=side;
};

Square.prototype.perimeter = function() {
  return this.side+this.side+this.side+this.side;
};

Square.prototype.area = function() {
  return this.side*this.side;
};

module.exports = Square;
