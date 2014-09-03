function Car(make, model){
  this.make = make;
  this.model = model;
}

Car.prototype.year = function(){
  return this.year;
};

Car.prototype.toString = function(){
  var response = "The car's make is " + this.make + " the model is " + this.model;
  return response
};

var myCar = new Car("ford", "mustang")
console.log(myCar.toString())
