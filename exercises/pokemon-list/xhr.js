const xhr = new XMLHttpRequest();

// first example:
// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState)
//     if(xhr.readyState === 4) {

//     }
// }

// second example:
xhr.onreadystatechange = () => {
    console.log(xhr.status)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        console.log(data)
        for(let i=0; i < data.length; i++) {
            const results = document.getElementById("results");
            results.innerHTML  += `<li>${data[i].title}</li>`;
        }
    }
}

xhr.open("GET", "https://api.vschool.io/alan/todo", true)
xhr.send()

axios.get("https://api.vschool.io/alan/todo").then((response)=>{
    console.log(response.data)
})
/*
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data.name;
        document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};

xhr.open("GET", "http://swapi.co/api/people/1/", true);
xhr.send();
*/