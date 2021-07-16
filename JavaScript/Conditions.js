// we are using some if else condition of javascript here 
let a = prompt('Enter Name 1');
let b = prompt("Enter Name 2");
let c = prompt("Enter Value 1");
let d = prompt("Enter Value 2");
if (c === d) {
    console.log("Hello my all values are Correct");
} else {
    console.log("Try Again ");
}
if (a === b) {
    console.log("You are Correct");
} else if (a.length === b.length) {
    console.log("You are partially correct");
} else {
    console.log("You are wrong!!! Try Again:)");
}
let value1;
const value = prompt("Enter The Number you want to do");
switch (value) {
    case 1:
        value1 = c + d;
        break;
    case 2:
        value1 = c - d;
        break;
    case 3:
        value1 = c * d;
        break;
    case 4:
        value1 = c / d;
        break;

}
console.log(value1);