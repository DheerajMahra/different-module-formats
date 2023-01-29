//singleton
var mathSingletonLib = (function() {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  return { add, subtract, divide, multiply }
})();

console.log("--------mathSingletonLib---------")
console.log(mathSingletonLib.add(2, 3));
console.log(mathSingletonLib.subtract(2, 3));
console.log(mathSingletonLib.multiply(2, 3));
console.log(mathSingletonLib.divide(2, 3));

//factory
var mathFactoryLib = function() {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  return { add, subtract, divide, multiply }
};

console.log("--------mathFactoryLib---------")
var mathFactoryLibInstance = mathFactoryLib();
console.log(mathFactoryLibInstance.add(2, 3));
console.log(mathFactoryLibInstance.subtract(2, 3));
console.log(mathFactoryLibInstance.multiply(2, 3));
console.log(mathFactoryLibInstance.divide(2, 3));

