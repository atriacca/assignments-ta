const display = document.getElementById('display')
const clickBtn = document.getElementById("clickBtn") 
const resetBtn = document.getElementById("resetBtn") 
const countdownSpan = document.getElementById("countdown")

let count = 0
let intervalId
let countdownNum = 5


if (localStorage.getItem("clicked") !== null){
    count = localStorage.getItem("clicked")
}

display.textContent = count
countdownSpan.textContent = countdownNum

clickBtn.addEventListener("click", (e)=> {
    if (!intervalId){
        intervalId = setInterval(countdown, 1000)
    }
    count++
    localStorage.setItem("clicked", count)
    display.textContent = count
})

resetBtn.addEventListener("click", (e)=> {
    count = 0
    localStorage.setItem("clicked", count)
    display.textContent = count
    clearInterval(intervalId)
    countdownNum = 5
    clickBtn.disabled = false
    alert(`Please refresh your page to reset the countdown function.`)
    countdown()
})

function countdown(){
    countdownNum--
    countdownSpan.textContent = countdownNum 

    if (countdownNum === 0){
        clearInterval(intervalId)
        clickBtn.disabled = true
    }
}
/*

*/