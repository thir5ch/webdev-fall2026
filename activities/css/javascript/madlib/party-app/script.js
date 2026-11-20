function partyList() {

    let guests = Number(document.getElementById("people").value);
    let result = document.getElementById("result");
    let totalguest = guests
    let plates = guests
    let cups = guests
    let balloons = guests * 4
    let soda = guests * 2
    let pizza = guests * 3

    result.textContent = "If you have " + totalguest + " guests" + " you will need:\n" + " \n" + plates + " plates \n" + cups + " cups \n" + balloons + " balloons \n" + soda + " cans of soda \n" + pizza + " slices of pizza"


    
}