const getBtn = document.getElementById("get-btn")
const todoList = document.getElementById("todo-list")
const todoEdit = document.getElementById("todo-edit")
// getBtn.addEventListener("click", (e)=>getTodos())
getTodos()
function refreshPage(){
    window.location.reload()
} 
///////////////
// GET REQUEST
function getTodos(){
    axios.get('https://api.vschool.io/alan/todo/')
    .then(response => {
        const todos = response.data
        listTodos(todos)
    })
    .catch(error => console.log(error))
}

function listTodos(todos){
    todoList.innerHTML = ""
    for (let i = 0; i < todos.length; i++){
        const todoContainer = document.createElement("div")
        const title = document.createElement("h3")
        const description = document.createElement("p")
        const price = document.createElement('p')
        const imgUrl = document.createElement('img')
        const completed = document.createElement('p')
        const delBtn = document.createElement('button')
        const checkBox = document.createElement("input")
        const checkBoxText = document.createElement("span")
        const editBtn = document.createElement('button')
        
        // todoContainer.className = "todoContainer" // similar to w/classList
        todoContainer.classList.add("todoContainer")
        title.className = "title"
        description.className = "description"
        price.className = 'price'
        imgUrl.className = 'imgUrl'
        completed.className = 'completed'
        
        title.textContent = todos[i].title
        description.textContent = todos[i].description
        price.textContent = todos[i].price
        imgUrl.src = todos[i].imgUrl
        completed.textContent = (`Completed: ${todos[i].completed}`)
        delBtn.textContent = "DELETE"
        // pre-ES6 syntax:
        // delBtn.addEventListener("click", function(e){
        //     deleteTodo(e, todos[i]._id)
        // })
        delBtn.addEventListener("click", (e)=>deleteTodo(e, todos[i]._id))
        checkBox.type = "checkbox"
        // Same thing different syntax: checkBox.setAttribute("type", "checkbox")
        checkBox.checked = todos[i].completed
        checkBoxText.textContent = (`Check when completed:`)
        
        editBtn.textContent = "EDIT"
        // editBtn.addEventListener("click", (e)=>createTodoEditForm(e, todos[i]))
        editBtn.addEventListener("click", (e, updatedTodo) => {
            const updatedDescription = document.createElement("input")
            const updatedPrice = document.createElement('input')
            const updatedImgUrl = document.createElement('input')
            const updatedTitle = document.createElement("input")
            const saveBtn = document.createElement("button")
            const cancelBtn = document.createElement("button")
        
            // todoContainer.classList.add("todoContainer")
        
            updatedTitle.type = "text"
            updatedDescription.type = "text"
            updatedPrice.type = "text"
            updatedImgUrl.type = "text"
        
            updatedTitle.name = "updatedTitle"
            updatedDescription.name = "updatedDescription"
            updatedPrice.name = "updatedPrice"
            updatedImgUrl.name = "newImgUrl"
        
            cancelBtn.textContent = "REFRESH PAGE"
            cancelBtn.addEventListener("click", function(e){
                refreshPage()
            })
            saveBtn.textContent = "SAVE"
            saveBtn.addEventListener("click", function(e){
                const newUpdatedTitle = updatedTitle.value
                const newUpdatedDescription = updatedDescription.value
                const newUpdatedPrice = updatedPrice.value
                const newUpdatedImgUrl = updatedImgUrl.value
                const updatedTodo = {
                    description: newUpdatedDescription,
                    price: newUpdatedPrice,
                    imgUrl: newUpdatedImgUrl,
                    _id: todos[i]._id,
                    title: newUpdatedTitle
                }
                updateTodo(updatedTodo)
            })
            updatedTitle.value = todos[i].title
            updatedDescription.value = todos[i].description
            updatedPrice.value = todos[i].price
            updatedImgUrl.value = todos[i].imgUrl
        
            todoContainer.appendChild(updatedTitle)
            todoContainer.appendChild(updatedDescription)
            todoContainer.appendChild(updatedPrice)
            todoContainer.appendChild(updatedImgUrl)
            todoContainer.appendChild(saveBtn)
            todoContainer.appendChild(cancelBtn)
            todoList.appendChild(todoContainer)        
        
        })

        checkBox.addEventListener("click", (e)=>updateChecked(e, todos[i]._id))

        // DIFFERENT WAYS TO STYLE: (all do the same thing)
        // title.style.textDecoration = todos[i].completed && "done"
        // price.className = todos[i].completed && "done"
        // todos[i].completed === true && description.classList.add('done')
        todos[i].completed === true ? title.className = 'done' : title.className = 'norm'
        todos[i].completed === true ? description.classList.add("done") : description.classList.add("norm")

        todoContainer.appendChild(title)
        todoContainer.appendChild(description)
        todoContainer.appendChild(price)
        todoContainer.appendChild(imgUrl)
        // todoContainer.appendChild(completed)
        todoContainer.appendChild(checkBoxText)
        todoContainer.appendChild(checkBox)
        todoContainer.appendChild(editBtn)
        todoContainer.appendChild(delBtn)
        todoList.appendChild(todoContainer)
    }
}

///////////////
// PUT REQUEST
function updateChecked(e, id){
    axios.put("https://api.vschool.io/alan/todo/"+id, {completed: true}).then((response)=>{
        // console.log(response.data)
        alert("\nYour todo completion status was successfully updated!")
        refreshPage()
    })
}

// document.addEventListener("submit", function(event){
//     event.preventDefault()
// }
// saveBtn.addEventListener("click", (e)=>updateTodo(e, todo))

function updateTodo(updatedTodo){
    alert(`\nYour todo was successfully updated! \n\nRefresh your page to view the changes.`)
    axios.put("https://api.vschool.io/alan/todo/" + updatedTodo._id, {
    description: updatedTodo.description,
    price: updatedTodo.price,
    imgUrl: updatedTodo.imgUrl,
    title: updatedTodo.title
    })
    .then((response)=>{
        console.log(response.data)
    })
    // refreshPage()
}

function createTodoEditForm(e, todo){
    // const todoContainer = document.createElement("div")
    const updatedDescription = document.createElement("input")
    const updatedPrice = document.createElement('input')
    const updatedImgUrl = document.createElement('input')
    const updatedTitle = document.createElement("input")
    const saveBtn = document.createElement("button")
    const cancelBtn = document.createElement("button")

    // todoContainer.classList.add("todoContainer")

    updatedTitle.type = "text"
    updatedDescription.type = "text"
    updatedPrice.type = "text"
    updatedImgUrl.type = "text"

    updatedTitle.name = "updatedTitle"
    updatedDescription.name = "updatedDescription"
    updatedPrice.name = "updatedPrice"
    updatedImgUrl.name = "newImgUrl"

    cancelBtn.textContent = "CANCEL"
    cancelBtn.addEventListener("click", function(e){
        refreshPage()
    })
    saveBtn.textContent = "SAVE"
    saveBtn.addEventListener("click", function(e){
        const newUpdatedTitle = updatedTitle.value
        const newUpdatedDescription = updatedDescription.value
        const newUpdatedPrice = updatedPrice.value
        const newUpdatedImgUrl = updatedImgUrl.value
        const updatedTodo = {
            description: newUpdatedDescription,
            price: newUpdatedPrice,
            imgUrl: newUpdatedImgUrl,
            _id: todo._id,
            title: newUpdatedTitle
        }
        updateTodo(updatedTodo)
    })
    updatedTitle.value = todo.title
    updatedDescription.value = todo.description
    updatedPrice.value = todo.price
    updatedImgUrl.value = todo.imgUrl

    todoContainer.appendChild(updatedTitle)
    todoContainer.appendChild(updatedDescription)
    todoContainer.appendChild(updatedPrice)
    todoContainer.appendChild(updatedImgUrl)
    todoContainer.appendChild(saveBtn)
    todoContainer.appendChild(cancelBtn)
    todoList.appendChild(todoContainer)

}

///////////////
// DELETE REQUEST
function deleteTodo(e, id){
    axios.delete("https://api.vschool.io/alan/todo/"+id).then((response)=>{
        alert("\nYour todo was successfully deleted!")
        getTodos()
        // e.target.parentNode.remove()
    })
}

///////////////
// POST REQUEST
const addTodoForm = document["add-todo-form"]

// addTodoForm.addEventListener("click", function(e){
    addTodoForm.addEventListener("submit", (event) => {
        event.preventDefault()    // console.log(addTodoForm)
    const newTitle = addTodoForm.title.value
    const newDescription = addTodoForm.description.value
    const newPrice = addTodoForm.price.value
    const newImgUrl = addTodoForm.imgUrl.value
    addTodoForm.title.value = ""
    addTodoForm.description.value = ""
    addTodoForm.price.value = ""
    addTodoForm.imgUrl.value = ""

    const newTodo = {
        description: newDescription,
        price: newPrice,
        completed: false,
        imgUrl: newImgUrl,
        title: newTitle
    }
    postTodo(newTodo)

})
function postTodo(newTodo){
    axios.post('https://api.vschool.io/alan/todo/', newTodo)
    .then(response => {
        console.log(response)
        alert(`\nYour new todo was successfully added!`)
        getTodos()
    })
    .catch(error => console.log(error))
}