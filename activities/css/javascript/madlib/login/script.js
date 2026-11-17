// These are the CORRECT username and password.
// We store them in variables so we can compare against them later.
const correctUsername = "student";
const correctPassword = "code123";

// This function is called when the Login button is clicked.
function checkLogin() {

    // Step 1: Get what the user typed into each box.
    // document.getElementById("...") finds the element with that id.
    // .value gives us the text that is inside the box.
    let enteredUsername = document.getElementById("username").value;
    let enteredPassword = document.getElementById("password").value;
    const messageParagraph = document.getElementById("message");

    // Step 2: Find the paragraph where we will show the result.
    let message = document.getElementById("message");


    // Step 3: Make decisions with if / else if / else.
    // The computer checks each condition from TOP to BOTTOM
    // and runs ONLY the first one that is true.
    //
    //   ===  means "is exactly equal to"
    //   !==  means "is NOT equal to"
    //   &&   means "AND" (both sides must be true)

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Case 1: The username is right AND the password is right.
        message.textContent = "Success! You are logged in.";
        messageParagraph.style.color = "green";
        messageParagraph.style.fontSize = "100px";
        messageParagraph.style.backgroundColor = "lightGreen";
        messageParagraph.style.fontWeight = "900";
    }
    else if (enteredUsername !== correctUsername && enteredPassword !== correctPassword) {
        // Case 2: The username is wrong AND the password is wrong.
        message.textContent = "Both your username and password are incorrect.";
        messageParagraph.style.color = "red";
        messageParagraph.style.fontSize = "100px";
        messageParagraph.style.backgroundColor = "lightRed";
        messageParagraph.style.fontWeight = "900";
    }
    else if (enteredUsername !== correctUsername && enteredPassword === correctPassword) {
        // Case 3: Only the username is wrong.
        // (We know the password must be right, because Case 2 already
        //  caught the situation where BOTH were wrong.)
        message.textContent = "Incorrect username.";
        messageParagraph.style.color = "red";
        messageParagraph.style.fontSize = "100px";
        messageParagraph.style.backgroundColor = "lightRed";
        messageParagraph.style.fontWeight = "900";

    }
    else {
        // Case 4: Everything else. If we got this far, the username
        // must be right, so the only thing left is a wrong password.
        message.textContent = "Incorrect password.";
        messageParagraph.style.color = "red";
        messageParagraph.style.fontSize = "100px";
        messageParagraph.style.backgroundColor = "lightRed";
        messageParagraph.style.fontWeight = "900";

    }
}