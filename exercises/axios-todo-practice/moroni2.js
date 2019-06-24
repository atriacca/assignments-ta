const todoForm = document.todoForm
function getRequst() {
    axios.get("https://api.vschool.io/moroniallred/todo")
        .then(response => {
            const todo = response.data
            createList(todo)
        })
        .catch(error => {
            console.error(error);
        })
}
function createList(todos) {
    console.log(todos)
    for (let i = 0; i < todos.length; i++) {
        const div = document.createElement("div")
        const finisedbox = document.createElement("input")
        const h1 = document.createElement("h1")
        const p1 = document.createElement("span")
        const img = document.createElement("img")
        const finised = document.createElement("span")
        const descrip = document.createElement("h3")
        const $$ = document.createElement("span")
        const deleteBut = document.createElement("button")
        const priceWrither = document.createElement("div")
        const isFinshed = document.createElement("div")
        const divDel = document.createElement("div")
        const editbut = document.createElement("button")
        const editDiv = document.createElement("div")
        const editForm = document.createElement("div")
        finisedbox.type = "checkbox"
        h1.textContent = todos[i].title
        p1.textContent = todos[i].price
        descrip.textContent = todos[i].description
        deleteBut.textContent = "delete"
        finised.textContent = "finished:"
        finisedbox.checked = todos[i].completed
        $$.textContent = "$"
        $$.classList.add("money")
        priceWrither.classList.add("priceBox")
        isFinshed.classList.add("isItFinished")
        img.src = todos[i].imgUrl
        divDel.classList.add("deleteDiv")
        editbut.textContent = "Edit"
        editDiv.classList.add("editDiv")
        strikeout(finisedbox, h1)
        remove(finisedbox, h1)
        putIt(finisedbox, todos, i)
        deleteToDo(deleteBut, finisedbox, todos[i])
        // editIt(editbut, editForm, todos, i)
        div.classList.add("todo")
        div.appendChild(h1)
        div.appendChild(descrip)
        div.appendChild(img)
        div.appendChild(priceWrither)
        priceWrither.appendChild($$)
        priceWrither.appendChild(p1)
        div.appendChild(isFinshed)
        isFinshed.appendChild(finised)
        isFinshed.appendChild(finisedbox)
        div.appendChild(divDel)
        divDel.appendChild(deleteBut)
        div.appendChild(editDiv)
        editDiv.appendChild(editbut)
        div.appendChild(editForm)
        document.getElementById("appendParent").appendChild(div)
        
        editbut.addEventListener('click', (e) => {
            editIt(editbut, editForm, todos, i)
        })
    }
}
function deleteToDo(button, checkedBox, todos) {
    button.addEventListener("click", function (event) {
        if (checkedBox.checked === true) {
            axios.delete("https://api.vschool.io/moroniallred/todo/" + todos._id)
                .then(function () {
                    document.getElementById("appendParent").innerHTML = ""
                    getRequst()
                })
                .catch(error => {
                    console.error(error);
                })
        }
    })
}
todoForm.addEventListener("submit", function (event) {
    event.preventDefault()
    if (todoForm.title.value !== "" && !isNaN(todoForm.price.value)) {
        if (todoForm.image.value === "") {
            todoForm.image.value = "https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        }
        axios.post("https://api.vschool.io/moroniallred/todo/", {
            title: todoForm.title.value,
            price: todoForm.price.value,
            description: todoForm.description.value,
            imgUrl: todoForm.image.value,
        })
            .then(function () {
                document.getElementById("appendParent").innerHTML = ""
                getRequst()
            })
            .catch()
        todoForm.title.value = ""
        todoForm.price.value = ""
        todoForm.description.value = ""
        todoForm.image.value = ""
    }
})
function strikeout(box, h1) {
    if (box.checked === true) {
        h1.classList.add("strike")
    }
}
function remove(box, h1) {
    if (box.checked === false) {
        h1.classList.remove("strike")
    }
}
function putIt(box, todos, i) {
    box.addEventListener("click", function (event) {
        axios.put("https://api.vschool.io/moroniallred/todo/" + todos[i]._id, { "completed": !todos[i].completed })
            .then(function () {
                document.getElementById("appendParent").innerHTML = ""
                getRequst()
            })
            .catch(error => {
                console.error(error);
            })
    })
}
const editTitle = document.createElement("input");
const editDecription = document.createElement("input");
const editPrice = document.createElement("input");
const editImageURL = document.createElement("input");
function editIt(editPush, editForm, todos, i) {
    console.log('fired')
    editPush.addEventListener("click", function (event) {
        if (editPush.textContent === "Edit") {
            editPush.textContent = "Save";
            const editTitle = document.createElement("input");
            const editDecription = document.createElement("input");
            const editPrice = document.createElement("input");
            const editImageURL = document.createElement("input");
            editTitle.placeholder = "Title";
            editDecription.placeholder = "description";
            editPrice.type = "number";
            editPrice.placeholder = "$0";
            editImageURL.placeholder = "image Url";
            editTitle.name = "editTitle";
            editForm.appendChild(editTitle);
            editForm.appendChild(editDecription);
            editForm.appendChild(editPrice);
            editForm.appendChild(editImageURL);
            // console.log(todos[i].title);
            console.log()
        } else if (editPush.textContent === "Save") {
            editPush.textContent = "Edit";
            axios.put("https://api.vschool.io/moroniallred/todo/" + todos[i]._id, {
                title: editTitle.value,
                descriptions: editDecription.value,
                price: editPrice.value,
                imgUrl: editImageURL
                    // .then()
                    // .catch()
            })
            // removeChild
        }
    })
}
getRequst()