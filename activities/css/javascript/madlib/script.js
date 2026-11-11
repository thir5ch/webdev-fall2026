function create() {
    // This will get the vaule typed into the name box by the user
    const name1 = document.getElementById("nameInput1").value;
    const adjective = document.getElementById("adjective").value;
    const verb = document.getElementById("verb").value;
    const exclamation = document.getElementById("exclamation").value;
    const noise = document.getElementById("noise").value;
    const body = document.getElementById("body").value;
    const animal = document.getElementById("animal").value;
    const place = document.getElementById("place").value;
    const person = document.getElementById("person").value;
    const verb2 = document.getElementById("verb2").value;

    // create the story
    const story = "One day, " + name1 + " woke up feeling very " + adjective + ". " + name1 +  " decided to " + verb + " all the way to school. Suddenly, " + name1 + " screamed " + exclamation + ", and made a loud " + noise + ". Everyone turned around when they saw a giant " + body + " sticking out of a " + animal + "! Out of nowhere, a wild " + animal + " had appeared in the middle of " + place + ". Even " + person + " couldn't believe what was happening! In the end, everyone decided to " + verb2 + " and call it the craziest day ever!"; 


    document.getElementById("madlib").textContent = story;
}