"use strict";

//getElementById: here we select particular element having specified id which we call 
var head = document.getElementById('h1');
console.dir(head); //getElementsByTagName: here we select elements having specified tagnames

var val = document.getElementsByTagName('li');
console.dir(val); // getElementByClassName: here we select elements having specifieed class name

var val1 = document.getElementsByClassName('test');
console.dir(val1); //queryselector: It is used to select the single element which is first

var val2 = document.querySelector('li');
console.dir(val2); //querySelectorAll: it used to select all the elements present in html document

var val3 = document.querySelectorAll('li');
console.dir(val3);
//# sourceMappingURL=Get_Element.dev.js.map
