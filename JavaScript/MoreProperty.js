//Filter: It will also return a new array with particular conditions
let li = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const val = li.filter(n => {
    return n % 2 === 1;
})
console.log(val)

//Every: It checks whether all the elements pass the provided function
let arr = ['dog', 'cat', 'tiger', 'ELEPHANT', 'HEN']
arr.every(n => {
    console.log(n === n.toUpperCase())

})

//Some It is similar to every but it returns true if any of the condition is true
arr.some(n => {
    console.log(n === n.toUpperCase())
})

// Default parameter to the function 
function multiply(a, b = 1) {
    console.log(a * b)
}
multiply(4) //ans=4
multiply(4, 6) //ans=24

// Spread: we can use a particular array into another array, objects etc
let li1 = [1, 2, 3, 4, 5]
const li2 = [...li1, 6, 7, 8, 9, 10]
console.log(li2.length); // here we will get that size of li2 is 10 5 element of li1 and 5 of li2

//Rest: we spread particular array as argument in a functtion
function traverse(...li1) {
    for (n of li1) {
        console.log(n)
    }
}
traverse()