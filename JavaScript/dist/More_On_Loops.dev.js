"use strict";

//while loops
var li = ['lion', 'tiger', 'elephant', 'whale'];
i = 0;

while (i <= li.length) {
  console.log(li[i]);
  i += 1;
} //For... of Lopps


for (var _i = 0, _li = li; _i < _li.length; _i++) {
  i = _li[_i];
  console.log(i);
} // Iterating Over Objects using for..of 


var li1 = {
  name: "Neeraj",
  "class": "4x2",
  rollno: 1902160
};

for (i in li1) {
  console.log(i, li1[i]);
}
//# sourceMappingURL=More_On_Loops.dev.js.map
