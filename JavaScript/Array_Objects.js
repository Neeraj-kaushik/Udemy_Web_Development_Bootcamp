//creating array
let li = ['red', 'yellow', 'green'];
//working on array


//getting values of array by indexing methods
console.log(li[1]);
console.log(li[0][1]);

//Push: to add element at end of array
li.push("Blue");
console.log(li);

//Unshift: Add element to start of array
li.unshift("black");
console.log(li);

//Pop: Remove element from end of array
li.pop();
console.log(li);

//Shift: Remove element from start of array
li.shift();
console.log(li);

//Splice: Remove/Replace particular element
li.splice(0, 1, "Blue");
console.log(li);

// Creating objects in python
let li1 = {
    name: "Neeraj",
    class: "4x2",
    rollno: 1902160
}

// calling partiular key and pair 
console.log(li1.name);
console.log(li1.rollno);

//to add new value inside object
li1.subject = "Maths";
console.log(li1);

// Array having Objects
let li2 = [{
        product: 'Swift',
        price: 8,
        quality: 4
    },
    {
        product: 'Creta',
        price: 14,
        quality: 4.5
    },
    {
        product: 'Range Rover',
        price: 50,
        quality: 5
    }
]

//Calling values from this one be like
console.log(li2[0].product);
console.log(li2[1].price);
console.log(li2[2].quality);