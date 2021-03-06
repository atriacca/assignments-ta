const getBtn = document.getElementById("get-btn")
const todoList = document.getElementById("todo-list")
const todoEdit = document.getElementById("todo-edit")
getBtn.addEventListener("click", getTodos)
// getTodos()
getTodos()
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
        delBtn.textContent = "Delete"
        // pre-ES6:
        // delBtn.addEventListener("click", function(e){
        //     deleteTodo(e, todos[i]._id)
        // })
        delBtn.addEventListener("click", (e)=>deleteTodo(e, todos[i]._id))
        checkBox.type = "checkbox"
        checkBox.checked = todos[i].completed
        checkBox.addEventListener("click", (e)=>updateChecked(e, todos[i]._id))
        
        editBtn.textContent = "Edit"
        editBtn.addEventListener("click", (e)=>createTodoEditForm(e, todos[i]._id))
        
        checkBoxText.textContent = (`Check when completed:`)

        todos[i].completed === true ? title.className = 'completedLineThrough' : title.className = 'title'
        todos[i].completed === true ? description.classList.add("completedLineThrough") : description.className = 'description'
        
        todoContainer.appendChild(title)
        todoContainer.appendChild(description)
        todoContainer.appendChild(price)
        todoContainer.appendChild(imgUrl)
        todoContainer.appendChild(completed)
        todoContainer.appendChild(checkBoxText)
        todoContainer.appendChild(checkBox)
        todoContainer.appendChild(delBtn)
        todoContainer.appendChild(editBtn)
        todoList.appendChild(todoContainer)
    
    }
}

///////////////
// PUT REQUEST

function updateChecked(e, id){
    axios.put("https://api.vschool.io/alan/todo/"+id, {completed: e.target.checked}).then((response)=>{
        console.log(response.data)
        alert("\nYour todo completion status was successfully updated!")
    })
}

function editTodo(e, id){
    axios.put("https://api.vschool.io/alan/todo/"+id, {
        // description: e.target.value,
        // price: e.target.value,
        // imgUrl: e.target.value,
        title: e.target.value
    })
    .then((response)=>{
        console.log(response.data)
    })
}

function createTodoEditForm(e, id){
    const newContainer = document.createElement("div")
    // const newTitle = document.createElement("h3")
    // const newDescription = document.createElement("p")
    // const newPrice = document.createElement('p')
    // const newImgUrl = document.createElement('img')
    const newTitle = document.createElement("input")

    newContainer.classList.add("todoContainer")
    newTitle.type = "text"
    newTitle.name = "newTitle"
    newTitle.value = todos[i].title
    newTitle.placeholder = todos[i].title

    // newTitle.textContent = todos[i].title
    // newDescription.textContent = todos[i].description
    // newPrice.textContent = todos[i].price
    // newImgUrl.src = todos[i].imgUrl

    todoList.appendChild(newContainer)
    todoContainer.appendChild(newTitle)
    // newContainer.appendChild(description)
    // newContainer.appendChild(price)
    // newContainer.appendChild(imgUrl)

    editTodo(todos)
}

///////////////
// DELETE REQUEST
function deleteTodo(e, id){
    axios.delete("https://api.vschool.io/alan/todo/"+id).then((response)=>{
        alert("\nYour todo was successfully deleted!")
        e.target.parentNode.remove()
    })
}

///////////////
// POST REQUEST
const addTodoForm = document["add-todo-form"]

// addTodoForm.addEventListener("click", function(e){
addTodoForm.addEventListener("submit", function(e){
    e.preventDefault()
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

    axios.post('https://api.vschool.io/alan/todo/', newTodo)
        .then(response => {
            console.log(response)
            alert(`\nYour new todo was successfully added! \n\nClick the "Get Todos" button to update your page.`)
        })
        .catch(error => console.log(error))
})

/*
Part 5 - PUT Part 2 (extra credit)

Each Todo will have an "edit" button.

When clicked, the info will change to input boxes that are autofilled with the old Todo data

A user can change the value of these inputs

When the "edit" button is clicked, it will change to a "save" button.

When "save" is clicked, the form will disapear, and the new values will be displayed.

On save, the todo will be edited in the database


function createTodo(todo){
    const todoContainer = document.createElement("div");
    todoContainer.className = "todoContainer";

    const title = document.createElement("h1");
    todo.completed === true ? title.className = 'titleLineThrough' : title.className = 'title';
    title.textContent = todo.title;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = todo.description;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = todo.price;

    const imgUrl = document.createElement('img');
    imgUrl.className = 'imgUrl';
    imgUrl.src = todo.imgUrl;

    const completed = document.createElement('p');
    completed.className = 'completed';
    completed.textContent = todo.completed;

    const myCheckBox = document.createElement("input");
    myCheckBox.type = "checkbox";
    myCheckBox.checked = todo.completed;
    myCheckBox.addEventListener("click", (e)=>updateChecked(e, todo._id));

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener("click", (e)=>{deleteTodo(e, todo._id)});

    todoContainer.append(title);
    todoContainer.append(description);
    todoContainer.append(price);
    todoContainer.append(imgUrl);
    todoContainer.append(myCheckBox);
    todoContainer.append(completed);
    todoContainer.append(deleteButton);

    document.getElementById('wrapper').append(todoContainer)
}
*/