class Circle{
  constructor(radius){
      this.radius=radius
  };
  circunferencia(){
      return 2 * this.radius * Math.PI

  };
  area(){
      return Math.PI * Math.pow(this.radius ,2)
  };
};
