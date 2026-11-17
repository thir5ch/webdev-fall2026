function checkName() {

    // Step 1: Get what the user typed into each box.
    // document.getElementById("...") finds the element with that id.
    // .value gives us the text that is inside the box.

    const messageParagraph = document.getElementById("result");
    messageParagraph.textContent = " ";
    let enteredMonth = document.getElementById("month").value;
    let enteredAge = Number(document.getElementById("age").value);
    let enteredAnimal = document.getElementById("animal").value;

    // Step 2: Find the paragraph where we will show the result.
    let result = document.getElementById("result");


    if (enteredMonth === "January" || enteredMonth === "February" || enteredMonth === "December") {
        enteredMonth = "Chilly";
        messageParagraph.style.color = "blue";
        messageParagraph.style.backgroundColor = "lightblue";
    }

    else if (enteredMonth === "March" || enteredMonth === "April" || enteredMonth === "May") {
        enteredMonth = "Blooming";
        messageParagraph.style.color = "green";
        messageParagraph.style.backgroundColor = "lightgreen";
    }

    else if (enteredMonth === "June" || enteredMonth === "July" || enteredMonth === "August") {
        enteredMonth = "Warm"
        messageParagraph.style.color = "orange";
        messageParagraph.style.backgroundColor = "#FFD580";
    }

    else if (enteredMonth === "September" || enteredMonth == "October" || enteredMonth == "November") {
        enteredMonth = "Leafy"
        messageParagraph.style.color = "red";
        messageParagraph.style.backgroundColor = "#FF7F7F";
    }

    if(enteredAge >=1 && enteredAge < 20) {
        enteredAge = "Young"
    }

    else if (enteredAge >= 20 && enteredAge < 40) {
        enteredAge = "Middle Aged"
    }

    else if (enteredAge >=40 && enteredAge < 60) {
        enteredAge = "Unc"
    }
    
    else if (enteredAge <= 0) {
        messageParagraph.textContent = "Age must be above zero.";
    }

    else if (enteredAge >= 60) {
        enteredAge = "Old"
    }



    result.textContent = enteredAge + " " + enteredMonth + " " + enteredAnimal 
}
    









