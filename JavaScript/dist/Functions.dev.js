"use strict";

// Here we are going to use Functions properties
var li = ['red', 'green', 'blue']; // BASIC Creating of Functions

function callarray() {
  for (var _i = 0, _li = li; _i < _li.length; _i++) {
    i = _li[_i];
    console.log(i);
  }
}

callarray(); //Block Scooping

var value1 = 28;

if (value1 >= 28) {
  var pi = 3.14;
  var string1 = "hii";
  var string2 = "hello";
}

console.log(value1); // It can be accesed every where beacuse it is defined outside the function
//console.log(string1); //it will show error because we defined it inside a block it can't be called outside the function 

console.log(string2); //it will work because we use var to define it now it is not scooped to particullar block
// Getting familiar with Lexical Scooping
// I f we deifne some outer function and some inner function is defined inside itwe can't call variable defined in outer func into inner function

var value2 = 25;
var value3 = 28;

function add() {
  var sum = value2 + value3;

  function print1() {
    console.log(sum); // it will show error because sum is defined in outer function
  }

  print1(); // we are calling this function so that we can access to sum which is defined in outer function
}

add(); // Function Expression Here we give pass particular value to a variable in function

var ans = function ans(num) {
  console.log(num * num);
};

ans(7); //Higher Order Function Here we are passing a function as an argument to another function

function calltwice(value) {
  value();
  value();
}

function rolldie() {
  var roll = Math.floor(Math.random() * 6 + 1);
  console.log(roll);
}

calltwice(rolldie); // Returning Function Here we return a function inside a function

function findvalue(min, max) {
  return function (num) {
    console.log(num >= min && num <= max);
  };
}

var isvalue = findvalue(100, 200);
isvalue(100); // return true

isvalue(700); // return False
// Methods We can add functions as properties on object

var math = {
  add: function add(a, b) {
    console.log(a + b);
  },
  sub: function sub(a, b) {
    console.log(a - b);
  },
  mul: function mul(a, b) {
    console.log(a * b);
  }
}; // Calling functions in objects

math.add(2, 3); //5

math.mul(4, 7); //28
// This in Methods : it is used to access other values in object

var person = {
  firstname: "Neeraj",
  lastname: "kaushik",
  fullname: function fullname() {
    console.log("My name is ".concat(this.firstname, " ").concat(this.lastname));
  }
};
person.fullname(); //Try and Catch: Here the complier will try first case if it will run its okay otherwise it will run catch case 

try {
  console.log("hello".toUpperCase()); //if we will write hello outside inverted commas it will not work
} catch (_unused) {
  console.log("Error!!!"); // if upper statement will not work then it will work
} // For Each : In this method our particular function will for every value in the array


var forme = [1, 2, 3, 4, 5, 6, 7];
forme.forEach(function (el) {
  console.log(el * el);
}); // Working for each on array of objects

var forme1 = [{
  movie: 'F9',
  price: 210
}, {
  movie: 'ddlj',
  price: 50
}, {
  movie: 'toofan',
  price: 150
}];
forme1.forEach(function (value) {
  console.log("".concat(value.movie, "-->").concat(value.price));
}); //Map: It will create another array from the same array by appling some condtion of the array

var li1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
li1.map(function (val) {
  if (val % 2 === 0) {
    console.log(val);
  }
}); //Arrow Function: using this we can compact our function into a smaller format

var square = function square(x) {
  return x * x;
};

console.log(square(6)); //SetTimeout: This function is used so that articular output will be print after some seconds given by the user

setTimeout(function () {
  console.log("this is function fot timeout in javascript");
}, 3000); //SetInterval:I t will print particular text after every interval of given time

setInterval(function () {
  console.log("using set interval");
}, 2000);
//# sourceMappingURL=Functions.dev.js.map
