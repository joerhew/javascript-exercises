const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, item) => {
    return total + item;
  }, 0)
  };

const multiply = function(array) {
  return array.length ? array.reduce((product, item) => product * item) : 0;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	if(num === 0) {
    return 1;
  } else {
    let result = num;
    for (i = num-1; i > 0; i--) {
      result *= i;
    }
    return result;
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
