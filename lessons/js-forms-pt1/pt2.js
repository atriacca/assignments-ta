var myForm = document.myForm

myForm.addEventListener("submit", function(event){
    event.preventDefault()

    var numValue = myForm.numInput.value
    console.log( myForm.selectInput.value )
})  