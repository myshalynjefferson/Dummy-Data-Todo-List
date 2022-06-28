// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

console.log(arrayOfTodos[0].title)
    let OL = document.getElementById("todo-list")
    console.log(OL)

    function createLi(data) {
        const listItem = document.createElement("LI")
        const text = document.createTextNode(data)
        listItem.appendChild(text)
        console.log(listItem)
        OL.appendChild(listItem)
    }

// console.log(createLi())

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

// const filterTodos = () => {
//     arrayOfTodos.filter(todo => {
//         return if todo.userId does not equal '2'
//     })
// }

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    for (let index = 0; index < arrayOfTodos.length; index++) {
        const element = arrayOfTodos[index];
        // console.log(element.title)
        createLi(element.title)
    
    } 
}