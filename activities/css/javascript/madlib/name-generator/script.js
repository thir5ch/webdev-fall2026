function checkName() {

    // Step 1: Get what the user typed into each box.
    // document.getElementById("...") finds the element with that id.
    // .value gives us the text that is inside the box.

    let enteredMonth = document.getElementById("month").value;
    let enteredAge = Number(document.getElementById("age").value);
    let enteredAnimal = document.getElementById("animal").value;

    // Step 2: Find the paragraph where we will show the result.
    let result = document.getElementById("result");


    if (enteredMonth === "January" || enteredMonth === "February" || enteredMonth === "December") {
        enteredMonth = "Chilly";
    }
    else if (enteredMonth === "March" || enteredMonth === "April" || enteredMonth === "May") {
        enteredMonth = "Blooming";
    }
    else if (enteredMonth === "June" || enteredMonth === "July" || enteredMonth === "August") {
        enteredMonth = "Warm"
    }
    else if (enteredMonth === "September" || enteredMonth == "October" || enteredMonth == "November") {
        enteredMonth = "Leafy"
    }
    else {
        message.textContent = "Please enter a month.";
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
    
    else if (enteredAge < 0) {
        message.textContent = "Age must be above zero.";
    }

    else if (enteredAge >= 60) {
        enteredAge = "Old"
    }

    else {
        message.textContent = "Please enter age.";
    }



    result.textContent = enteredAge + " " + enteredMonth + " " + enteredAnimal + "!"
}
    









