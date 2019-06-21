// const getBtn = document.getElementById("get-btn")
// getBtn.addEventListener("click", getTodos)
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
    .catch(error => {
        console.log(error)
    })
}
// function getTodos(){
//     axios.get("https://api.vschool.io/alan/todo/")
//     .then((response) =>{
//         console.log(response.data);
//         for(let i = 0; i < response.data.length; i++){
//             createTodo(response.data[i])
//                 .catch(error => {
//                 console.log(error)
//           })
//        }
//     })
// }

function listTodos(arr){
    for (let i = 0; i < arr.length; i++){
        const container = document.createElement("div");
        container.className = "container";

        const title = document.createElement("h3")
        title.className = "title";
        title.textContent = arr[i].title
        document.body.appendChild(title)
        arr[i].completed === true ? title.className = 'completedLineThrough' : title.className = 'title';
        
        const description = document.createElement("p");
        description.className = "description";
        description.textContent = arr[i].description;
        document.body.appendChild(description)
        arr[i].completed === true ? description.className = 'completedLineThrough' : description.className = 'description';
    
        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = arr[i].price;
        document.body.appendChild(price)
    
        const imgUrl = document.createElement('img');
        imgUrl.className = 'imgUrl';
        imgUrl.src = arr[i].imgUrl;
        document.body.appendChild(imgUrl)
    
        const completed = document.createElement('p');
        completed.className = 'completed';
        completed.textContent = arr[i].completed;
        document.body.appendChild(completed)
    
    }

    }

///////////////
// POST REQUEST
const addTodoForm = document["add-todo-form"]

addTodoForm.addEventListener("submit", function(e){
    e.preventDefault()
    const todoTitle = addTodoForm.title.value
    addTodoForm.title.value = ""

    const newTodo = {
        title: todoTitle
    }

    axios.post('https://api.vschool.io/alan/todo/', newTodo)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
})

/*
function createTodo(todo){
    const container = document.createElement("div");
    container.className = "container";

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

    container.append(title);
    container.append(description);
    container.append(price);
    container.append(imgUrl);
    container.append(myCheckBox);
    container.append(completed);
    container.append(deleteButton);

    document.getElementById('wrapper').append(container)
}
*/