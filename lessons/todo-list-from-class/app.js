const todoList = document.getElementById('todo-list')

// What does axios do for us?
    // Parses JSON for us, and stringifies
    // Does all the CRUD operations in a simple syntax

// Get    => Gets our data
// Post   => Adds data to the DB
// Delete => Given the _id, it will delete the item with that _id

////////////////////////////////////////////////
// GET Request to receive todos from database
function getTodos(){
    axios.get("https://api.vschool.io/nateje/todo/")
        .then(response => {
            const todos = response.data 
            listTodos(todos)
        })
        .catch(error => console.log(error))
}

// Calling this so that the get request happends on page load
getTodos() 


// This function receives an array of Todo objects and creates element,
// edits the elements, and puts the elements on the HTML page.
function listTodos(todos){
    // To reset the page if you want an automatic page refresh (EXTRA)
    todoList.innerHTML = ""
    // Generate all the Todo Divs with their content, styles, and events.
    for(let i = 0; i < todos.length; i++){
        ////////////////////////////////////////////////
        // 1.  Create element(s)
        const todoDiv = document.createElement("div") // container for all the individual todo elements
        const title = document.createElement('h1')
        const description = document.createElement("p")
        const price = document.createElement("p")
        const delBtn = document.createElement("button")
        const checkbox = document.createElement("input")
        const imgTag = document.createElement("img")

        ////////////////////////////////////////////////
        // 2.  Edit the elements(s)
        title.textContent = todos[i].title
        if(todos[i].completed){
            title.style.textDecoration = "line-through"
        }
        description.textContent = todos[i].description
        price.textContent = `Price: $${todos[i].price}`

        // imgTag.setAttribute("src", todos[i].imgUrl)
        imgTag.src = todos[i].imgUrl 
        console.log(imgTag.src)
        imgTag.style.width = "200px"

        todoDiv.classList.add("todo")
        delBtn.textContent = "Delete"

        // DELETE request for Delete button
        delBtn.addEventListener("click", function(event){
            axios.delete(`https://api.vschool.io/nateje/todo/${todos[i]._id}`)
                .then(response => getTodos())
                .catch(error => console.log(error))
        })

        // adding checkbox properties and events
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = todos[i].completed

        // PUT Request for checkbox
        checkbox.addEventListener("click", (event) => {
            const updates = {
                completed: !todos[i].completed
            }
            axios.put(`https://api.vschool.io/nateje/todo/${todos[i]._id}`, updates)
                .then(response => getTodos())
                .catch(error => console.log(error))
        })

        ////////////////////////////////////////////////
        // 3. Append to DOM
        todoDiv.appendChild(title)
        todoDiv.appendChild(description)
        todoDiv.appendChild(price)
        todoDiv.appendChild(checkbox)
        todoDiv.appendChild(delBtn)
        todoDiv.appendChild(imgTag)
        todoList.appendChild(todoDiv)
    }
}


////////////////////////////////////////////////
// POST REQUEST
const addTodoForm = document.addTodoForm

addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    // capture the user's input
    const newTitle = addTodoForm.title.value
    const newImgUrl = addTodoForm.imgUrl.value

    // create an object from the user's input
    const newTodo = {
        title: newTitle,
        imgUrl: newImgUrl
    }
    // post that object to the DB
    axios.post("https://api.vschool.io/nateje/todo/", newTodo)
        .then(response => {
            getTodos()
        })
        .catch(error => console.log(error))
})








