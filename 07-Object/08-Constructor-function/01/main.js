//Do myself
function ObjCal () {
  this.read = function () {
    this.input_1 = +prompt("input_1")
    this.input_2 = +prompt("input_2")
  };
  this.sum = function () {
    return this.input_1 + this.input_2
  };
  this.mul = function () {
    return this.input_1 * this.input_2
  };
}


let calculator = new ObjCal()
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
console.log(calculator)




//ANSWER
// PROTO :  {num1:0,num2:0, sum : f(), read : f(),mul: f() }

function Calculator() {
  // S1 : this = {}
  // S2 : defined property to THIS == {}
  
  // ADD Value
  this.num1 = 0; // {num1:0}
  this.num2 = 0; // {num1:0,num2:0}
  // this.count = 0; 

  // ADD Method 
  this.sum = function () {  // {num1 : 0, num2 : 0, sum : f()}
      return this.num1 + this.num2
  }  

  this.read = function() { // {num1 : 0, num2 : 0 , sum : f(), read : f()}
      let value1 = +prompt("Enter Value1")
      let value2 = +prompt("Enter Value2")

      this.num1 = value1
      this.num2 = value2
      // this.count += 1
  }

  this.mul = function () { // {num1:0, num2 : 0 ,sum : f(), read : f(), mul: f()}
      return this.num1 * this.num2
  }    

  // S3 : auto return this == {num1:0, num2 : 0 ,sum : f(), read : f(),mul: f()}
}



const caluculator = new Calculator()
const caluculator2 = new Calculator()

caluculator.read()
console.log(caluculator.sum())
console.log(caluculator.mul())
console.log(caluculator)
// console.log(caluculator2)