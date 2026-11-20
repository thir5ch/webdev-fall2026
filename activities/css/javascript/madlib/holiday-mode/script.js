// STEP 1: Track whether holiday mode is on
const music = new Audio("birds.mp3");
const music2 = new Audio("lobby.mp3");

let holiday = "off"
// STEP 2: Create the function that runs when the button is clicked

function toggle () {

    let header = document.getElementById("site-header");
    let title = document.getElementById("page-title");
    let theme = document.getElementById("theme-toggle");
    let heading = document.getElementById("welcome-heading");
    let wtext = document.getElementById("welcome-text");
    let box = document.getElementById("menu-box");
    let footer = document.getElementById("site-footer");
    let one = document.getElementById("1");
    let two = document.getElementById("2");
    let three = document.getElementById("3");
    let four = document.getElementById("4");
    let menu = document.getElementById("menu");


    if (holiday == "off") {
        header.style.backgroundColor = "green"
        heading.textContent = "Earth Day Menu:"
        document.title = "Earth Day Mode"
        theme.textContent = "Normal Day Menu"
        holiday = "on"
        title.textContent = "Sunny Side Bakery Earth Day!"
        heading.style.color = "blue"
        footer.style.backgroundColor = "green"
        box.style.border = "dotted"
        footer.style.color = "white"
        box.style.borderColor = "blue"
        box.style.color = "blue"
        wtext.textContent = "A special Earth Day selection!"
        wtext.style.color = "blue"
        one.textContent = "Carrot Cake"
        two.textContent = "Earth Sugar Cookies"
        three.textContent = "Ocean Pudding"
        four.textContent = "Ozone Oreo Cake"
        menu.textContent = "Special Earth Day Menu!"
        heading.style.fontFamily = "Times New Roman"
        menu.style.fontFamily = "Times New Roman"
        document.body.style.backgroundImage = "linear-gradient(180deg, lightblue, blue)";
        music.play()
        music2.pause()
        music2.currentTime = 0;

    }
    else  {
        header.style.backgroundColor = "#5593f6"
        heading.textContent = "Normal Menu:"
        document.title = "Normal Mode"
        theme.textContent = "Earth Day Menu"
        heading.style.color = "#333333"
        holiday = "off"
        title.textContent = "Sunny Side Bakery"
        box.style.border = ""
        footer.style.backgroundColor = ""
        heading.style.color = ""
        footer.style.color = ""
        box.style.border = ""
        box.style.color = ""
        one.textContent = "Chocolate Chip Cookies"
        two.textContent = "Cinnamon Rolls"
        three.textContent = "Apple Pie"
        four.textContent = "Sourdough Bread"
        wtext.textContent = "Fresh bread, cookies, and pies baked every morning. Stop by and say hi!"
        menu.textContent = "Today's Menu"
        heading.style.fontFamily = "Arial"
        menu.style.fontFamily = "Arial"
        wtext.style.color = "#333333"
        document.body.style.backgroundImage = ""
        music2.play()
        music.pause()
        music.currentTime = 0;
    
    }



}
    // STEP 3: get the button and the elements to change

    
    // STEP 4: if holiday mode wasn't on, turn it on


    // STEP 5: if holiday mode was on, turn it off