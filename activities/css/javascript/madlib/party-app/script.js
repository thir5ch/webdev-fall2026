function partyList() {

    let guests = Number(document.getElementById("people").value);
    let result = document.getElementById("result");
    //  one extra for the host
    let totalpeople = guests + 1
    // two extra then one for the host
    let plates = guests + 3
    // two extra then one for the host
    let cups = guests + 3
    let balloons = guests * 4
    let soda = guests * 2
    let pizza = guests * 3

    result.textContent = "If you have " + totalpeople + " people " + "(" + guests + " guests and one host)" + " you will need:\n" + " \n" + plates + " plates \n" + cups + " cups \n" + balloons + " balloons \n" + soda + " cans of soda \n" + pizza + " slices of pizza"


    
}