const mode = document.getElementById("mode")
const heading = document.getElementById("heading")

mode.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black"
        heading.textContent = "Dark Mode"
        document.title = "Dark Mode"
        mode.textContent = "🌙"
        heading.style.color = "white"
    }
    else {
        document.body.style.backgroundColor = "white"
        heading.textContent = "Light Mode"
        document.title = "Light Mode"
        mode.textContent = "☀️"
        heading.style.color = "black"
    }

})