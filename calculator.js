var x = 10
var y = 0

function divide(a, b) {
  return a / b
}

function multiply(a,b){
return a*b
}

function calculate(num1, num2, operation){
if(operation == "divide"){
return divide(num1, num2)
}
if(operation == "multiply"){
return multiply(num1, num2)
}
}

console.log(divide(x, y))
console.log(calculate(10, 0, "divide"))
console.log(calculate(5, 3, "multiply"))
//we are changing the code.
