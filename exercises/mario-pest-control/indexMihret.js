var marioForm = document.marioF
document.addEventListener("submit", function (event){
    event.preventDefault()
    var total = document.createElement("p")
    total.textContent = "Total = "
    list.appendChild(total)
    
    marioForm.goomName.value = ""
    marioForm.boomName.value = ""
    marioForm.cheepName.value = ""
    // alert("hello")
})
// total = parsint(marioF.goom.value) + parsint(marioF.boom.value) + parsint(marioF.cheep.value)
/*
var marioForm = document.marioF
document.addEventListener("submit",function (event){
    event.preventDefault()
    var myDiv = document.getElementById("my-Div")
    var total = document.createElement("p")
    total.textContent = parseInt(marioForm.goonName.value) + parseInt(marioForm.boomName.value) + parseInt(marioForm.cheepName.value)
    myDiv.appendChild(total)
    
    marioForm.goomName.value = ""
    marioForm.boomName.value = ""
    marioForm.cheepName.value = ""
    alert("hello")
})
// total = parsint(marioForm.goom.value) + parsint(marioForm.boom.value) + parsint(marioForm.cheep.value)
*/