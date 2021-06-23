let input = prompt("Enter the Todo ");
const todos = ['Name', 'Class'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        for (let i = 0; i <= todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
    } else if (input === 'new') {
        const newtodo = prompt('Enter new ToDo');
        todos.push(newtodo);
        console.log(`${newtodo} added to list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter the index to delete'))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`ok deleted ${deleted}`)
        } else {
            console.log('Unknown Index')
        }

    }
    input = prompt("Enter the Todo ")
}
console.log('You are out of app')