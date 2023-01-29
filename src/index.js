var add = (function(){
  return function (a, b) { return a + b }
})();

var subtract = (function(){
  return function (a, b) { return a - b }
})();

var multiply = (function(){
  return function (a, b) { return a * b }
})();

var divide = (function(){
  return function (a, b) { return a / b }
})();

console.log(add(2, 2));
console.log(subtract(2, 2));
console.log(multiply(2, 2));
console.log(divide(2, 2));