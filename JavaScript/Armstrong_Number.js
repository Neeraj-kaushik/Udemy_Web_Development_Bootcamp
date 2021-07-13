let number = 153;

function armstrong(number) {
    let value = number;
    let sum, rev = 0;
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