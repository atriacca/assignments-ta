const navbar = document.getElementsByClassName("navbar")[0]
const btn = document.getElementById('nav-btn')

console.log(navbar)

btn.addEventListener("click", (event) => {
    navbar.classList.toggle("navbar-closed")


})