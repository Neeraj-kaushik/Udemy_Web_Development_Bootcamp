//while loops
let li = ['lion', 'tiger', 'elephant', 'whale'];
i = 0;
while (i <= li.length) {
    console.log(li[i]);
    i += 1;
}

//For... of Lopps
for (i of li) {
    console.log(i);
}

// Iterating Over Objects using for..of 
let li1 = {
    name: "Neeraj",
    class: "4x2",
    rollno: 1902160
}
for (i in li1) {
    console.log(i, li1[i]);
}