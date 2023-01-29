var require = require('requirejs');

require(["math"], function(math) {
  console.log(math.add(2, 3));
});