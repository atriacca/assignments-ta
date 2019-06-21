const axios = require("axios");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

// first example:
// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState)
//     if(xhr.readyState === 4) {
//     }
// }

// second example:
xhr.onreadystatechange = () => {
    // console.log(xhr.status)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText)
        const pokemonArr = data.objects[0].pokemon
        console.log(pokemonArr)
        // console.log(data.objects[0].pokemon)
        for(let i = 0; i < pokemonArr.length; i++) {
            const results = document.getElementById("pokemon");
            results.innerHTML += `<li>${pokemonArr[i].name}</li>`;
        }
    }
}

function acceptData(data){
    for (let i = 0; i < data.length; i++) {
        // create element
        const div = document.createElement('div')
        const p = document.createElement('p')
        const pTag = document.createElement('p')
        // Edit element(s)
        div.classList.add("todo-container")
        p.textContent = todo[i].title
        pTag.textContent = todo[i].description
        // Append - put on DOM
        div.document.body.appendChild(p)
        div.document.body.appendChild(pTag)
        document.body.appendChild(div)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

axios.get("https://api.vschool.io/pokemon").then((response)=>{
    // console.log(response.data)
})
document.addEventListener("submit", function(event){
    event.preventDefault()

    const h2Tag = document.createElement("h2")
    h2Tag.textContent = `xxx`
    output.appendChild(h2Tag)
    const h1 = document.createElement("h1")
    h1.textContent = "xxxx"
    const firstDiv = document.getElementById("pokemon")
    firstDiv.appendChild(h1)
})
/*
document.addEventListener("submit", function(event){
    event.preventDefault()

var h2Tag = document.createElement("h2")
h2Tag.textContent = `The total cost to remove all varmits as entered is ${costTotal} coins`
output.appendChild(h2Tag)
})

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();
*/