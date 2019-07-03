import React from "react"
// import axios from 'axios'

function NewHit() {

   return (
      <div>
         <form name="newHit">
            <label>Name:</label>  
            <input id="name" name="name"/>
            
            <label>Image URL:</label>
            <input id="image" name="image"/>
            
            <button>Add new hit</button>
         </form>
      </div>
   )
}

export default NewHit

// document.hitList.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const name = document.hitList.name.value;
//     const image = document.hitList.image.value;
//     const body = {
//         name,
//         image,
//     }

// const axios = require("axios");
// axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then((response) =>{
//    console.log(response.data);
//    for(let i = 0; i < response.data.length; i++){
//       createHitList(response.data[i])
//    }
// })

// function updateChecked(e, name){
//     axios.put("https://s3.amazonaws.com/v-school/data/hitlist.json"+name, {completed: e.target.checked}).then((response)=>{
//         console.log(response.data);
//     })
// }

// function deleteHit(e, name){
//     axios.delete("https://s3.amazonaws.com/v-school/data/hitlist.json"+name).then((response)=>{
//         e.target.parentNode.remove();
//     })
// }

//   const myCheckBox = document.createElement("input");
//   myCheckBox.type = "checkbox";
//   myCheckBox.checked = hitList.completed;
//   myCheckBox.addEventListener("click", (e)=>updateChecked(e, hitList.name));
//   const deleteButton = document.createElement("button");
//   deleteButton.innerHTML = "delete";
//   deleteButton.addEventListener("click", (e)=>{deleteHit(e, hitList.name)});

//   container.append(myCheckBox);
//   container.append(deleteButton);