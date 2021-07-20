//innerText: It is used to change the text of selected element like div, paragraph
const head = document.querySelector('h1').innerText = "We change the text using inner text"
document.querySelector('li').innerText = "Elephant"

//TextContent:we can see the text as written in html file
const cal = document.querySelector('p').textContent
console.dir(cal)

//InnerHTML: we use to see all the html work on particular element
const val = document.querySelector('p').innerHTML
console.dir(val)