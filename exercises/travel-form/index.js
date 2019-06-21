var travelForm = document.travelForm

travelForm.addEventListener("submit", function(e){
    e.preventDefault()
    var dietArray = travelForm.diet
    var checkedDietArray = []
    for (var i = 0; i < travelForm.diet.length; i++){
        if (dietArray[i].checked) {
        checkedDietArray.push(dietArray[i].value)
        }
    }
    console.log(checkedDietArray)
    alert(`
    First Name: ${travelForm.firstName.value}
    Last Name: ${travelForm.lastName.value}
    Age: ${travelForm.age.value}
    Gender: ${travelForm.gender.value}
    Destination: ${travelForm.locale.value}
    Dietary restrictions: ${checkedDietArray}
    `)
    })
/*
travelForm.submit.addEventListener("submit", function(e){
    e.preventDefault()
    var checkedDietArray = [];
    var checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedDietArray.push(checkedBoxes[i].value);
    }
    console.log(checkedDietArray)
});

travelForm.submit.addEventListener("click", function(e){
    e.preventDefault()
    var dietArray = []
    if (travelForm.vegetarian.checked){
        dietArray.push("Vegetarian")
    }
    if (travelForm.lactose.checked){
        dietArray.push("Lactose")
    }
    if (travelForm.peanut.checked){
        dietArray.push("Peanut")
    }
    if (travelForm.kosher.checked){
        dietArray.push("Kosher")
    }    
    console.log(dietArray)
    // alert(`
    // First Name: ${travelForm.firstName.value}
    // Last Name: ${travelForm.lastName.value}
    // Age: ${travelForm.age.value}
    // Gender: ${travelForm.gender.value}
    // Destination: ${travelForm.locale.value}
    // Dietary restrictions: ${dietArray.join(", ")}
    // `)
    //   OR (without string literals)....
    // alert(
    //     "First Name: " + travelForm.firstName.value  + "\n" + 
    //     "Last Name: " + travelForm.lastName.value + "\n" + 
    //     "Age: " + travelForm.age.value  + "\n" + 
    //     "Gender: " + travelForm.gender.value + "\n" + 
    //     "Destination: " + travelForm.locale.value + "\n" + 
    //     "Dietary restrictions: " + dietArray.join(", ")
    // )
})
*/