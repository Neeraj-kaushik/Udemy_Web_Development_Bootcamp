"use strict";

var input = prompt("Enter the Todo ");
var todos = ['Name', 'Class'];

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    for (var i = 0; i <= todos.length; i++) {
      console.log("".concat(i, ": ").concat(todos[i]));
    }
  } else if (input === 'new') {
    var newtodo = prompt('Enter new ToDo');
    todos.push(newtodo);
    console.log("".concat(newtodo, " added to list"));
  } else if (input === 'delete') {
    var index = parseInt(prompt('Enter the index to delete'));

    if (!Number.isNaN(index)) {
      var deleted = todos.splice(index, 1);
      console.log("ok deleted ".concat(deleted));
    } else {
      console.log('Unknown Index');
    }
  }

  input = prompt("Enter the Todo ");
}

console.log('You are out of app');
//# sourceMappingURL=Todo-Project.dev.js.map
