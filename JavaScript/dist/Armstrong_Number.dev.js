"use strict";

var number = 153;

function armstrong(number) {
  var value = number;
  var sum,
      rev = 0;

  while (value != 0) {
    rev = value % 10;
    sum = sum + rev * rev * rev;
    value = parseInt(value / 10);
  }

  if (sum === number) {
    console.log("Armstrong Number");
  } else {
    console.log("Not an Armstrong Number");
  }
}
//# sourceMappingURL=Armstrong_Number.dev.js.map
