
const axios = require("axios");

/*
const newToDo = {
    title: "My first newToDo"
};
axios.get('https://api.vschool.io/alan/todo/').then(response => {
    console.log(response.data);
  }).catch(function(error){
    console.log(error)
  });
*/

axios.get('https://api.vschool.io/pokemon').then(response => {
    console.log(response.data)
    for(let i = 0; i < response.data.length; i++){
      createToDo(response.data[i])
    }
  })

function createToDo(todo){
  const container = document.createElement('div');
  container.className = 'container';

  const title =document.createElement('h1');
  title.className = 'title';
  title.textContent = todo.title;

  const title =document.createElement('p');
  name.className = 'name';
  name.textContent = todo.name;

  container.append(title);
  container.append(name);

  document.getElementById('wrapper').append(container)
}