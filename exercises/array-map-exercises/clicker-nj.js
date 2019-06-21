// Go Speed Clicker example

const display = document.getElementById('display')
const btn = document.getElementById('myBtn')
const countDownSpan = document.getElementById('countDown')

let count = 0
let intervalId
let countDownNumber = 5

// if local storage exists   count = localStorage.count
if(localStorage.getItem("count") !== null){
    count = localStorage.getItem('count')
}

display.textContent = count
countDownSpan.textContent = countDownNumber

btn.addEventListener("click", function(){
    if(!intervalId){
        intervalId = setInterval(countdown, 1000)
    }
    // increment count
    count++
    // save the count in localstorage
    localStorage.setItem("count", count)
    // update the display to have the new count
    display.textContent = count
})

function countdown(){
    // decrement by 1
    countDownNumber--
    // update the display
    countDownSpan.textContent = countDownNumber

    if(countDownNumber === 0){
        clearInterval(intervalId)
        btn.disabled = true
    }
}