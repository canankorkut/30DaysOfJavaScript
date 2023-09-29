const body = document.getElementById('page-body')
const title = document.getElementById('title')
const lightMode = document.getElementById('light-mode')
const darkMode = document.getElementById('dark-mode')

// When clicking on the Light Mode div
lightMode.addEventListener("click", () => {
    title.textContent = "Light Mode"
    title.style.color = "#000000"
    body.style.backgroundColor = "#ffffff"
    lightMode.style.backgroundColor = "#fca311"
    lightMode.style.color = "#ffffff"
    darkMode.style.backgroundColor = "#e5e5e5"
    darkMode.style.color = "#000000"
})

// When clicking on the Dark Mode div
darkMode.addEventListener("click", () => {
    title.textContent = "Dark Mode"
    title.style.color = "#ffffff"
    body.style.backgroundColor = "#000000"
    lightMode.style.backgroundColor = "#e5e5e5"
    lightMode.style.color = "#000000"
    darkMode.style.backgroundColor = "#fca311"
    darkMode.style.color = "#ffffff"  
})