// Here we are going to use Functions properties
let li = ['red', 'green', 'blue'];

// BASIC Creating of Functions
function callarray() {
    for (i of li) {
        console.log(i);
    }
}
callarray()

//Block Scooping
let value1 = 28;
if (value1 >= 28) {
    const pi = 3.14;
    let string1 = "hii";
    var string2 = "hello";
}
console.log(value1); // It can be accesed every where beacuse it is defined outside the function
//console.log(string1); //it will show error because we defined it inside a block it can't be called outside the function 
console.log(string2); //it will work because we use var to define it now it is not scooped to particullar block

// Getting familiar with Lexical Scooping
// I f we deifne some outer function and some inner function is defined inside itwe can't call variable defined in outer func into inner function
let value2 = 25;
let value3 = 28;

function add() {
    let sum = value2 + value3;

    function print1() {
        console.log(sum); // it will show error because sum is defined in outer function
    }
    print1() // we are calling this function so that we can access to sum which is defined in outer function
}
add()

// Function Expression Here we give pass particular value to a variable in function
let ans = function(num) {
    console.log(num * num);
}
ans(7);

//Higher Order Function Here we are passing a function as an argument to another function
function calltwice(value) {
    value();
    value();
}

function rolldie() {
    const roll = Math.floor((Math.random() * 6) + 1);
    console.log(roll)
}
calltwice(rolldie);

// Returning Function Here we return a function inside a function
function findvalue(min, max) {
    return function(num) {
        console.log(num >= min && num <= max);
    }
}
const isvalue = findvalue(100, 200);
isvalue(100) // return true
isvalue(700) // return False

// Methods We can add functions as properties on object
let math = {
        add: function(a, b) {
            console.log(a + b);
        },
        sub: function(a, b) {
            console.log(a - b);
        },
        mul: function(a, b) {
            console.log(a * b);
        }
    }
    // Calling functions in objects
math.add(2, 3); //5
math.mul(4, 7); //28

// This in Methods : it is used to access other values in object
let person = {
    firstname: "Neeraj",
    lastname: "kaushik",
    fullname() {
        console.log(`My name is ${this.firstname} ${this.lastname}`);
    }
}
person.fullname();

//Try and Catch: Here the complier will try first case if it will run its okay otherwise it will run catch case 
try {
    console.log("hello".toUpperCase()); //if we will write hello outside inverted commas it will not work
} catch {
    console.log("Error!!!"); // if upper statement will not work then it will work
}