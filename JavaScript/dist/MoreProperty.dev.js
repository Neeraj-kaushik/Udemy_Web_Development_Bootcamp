"use strict";

//Filter: It will also return a new array with particular conditions
var li = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var val = li.filter(function (n) {
  return n % 2 === 1;
});
console.log(val); //Every: It checks whether all the elements pass the provided function

var arr = ['dog', 'cat', 'tiger', 'ELEPHANT', 'HEN'];
arr.every(function (n) {
  console.log(n === n.toUpperCase());
}); //Some It is similar to every but it returns true if any of the condition is true

arr.some(function (n) {
  console.log(n === n.toUpperCase());
}); // Default parameter to the function 

function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  console.log(a * b);
}

multiply(4); //ans=4

multiply(4, 6); //ans=24
// Spread: we can use a particular array into another array, objects etc

var li1 = [1, 2, 3, 4, 5];
var li2 = [].concat(li1, [6, 7, 8, 9, 10]);
console.log(li2.length); // here we will get that size of li2 is 10 5 element of li1 and 5 of li2
//Rest: we spread particular array as argument in a functtion

function traverse() {
  for (var _len = arguments.length, li1 = new Array(_len), _key = 0; _key < _len; _key++) {
    li1[_key] = arguments[_key];
  }

  for (var _i = 0, _li = li1; _i < _li.length; _i++) {
    n = _li[_i];
    console.log(n);
  }
}

traverse();
//# sourceMappingURL=MoreProperty.dev.js.map
