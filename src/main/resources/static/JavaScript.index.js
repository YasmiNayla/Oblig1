
function choose(movies){
    alert ("You will watch: "+ document.getElementById("movies").value);
}

function showAmount() {
    document.getElementById = function (Amount) {

    };
    let Amount = document.getElementById("Amount").value;
    if (Amount >= 1){
        return true;
    } else {
        alert("Invalid Order: write a minimum of 1 tickets);
    }
}

function showName() {
    document.getElementById = function (name) {

    };
    let name = document.getElementById("name").value;
    if (name >= 3){
        return true;
    } else {
        alert("You have to write the name you have on your Identification Card");
    }
}

function showSurname() {
    document.getElementById = function (surname) {

    };
    let surname = document.getElementById("surname").value;
    if (surname >= 3){
        return true;
    } else {
        alert("You have to write the surname you have on your Identification Card");
    }
}

function showPhoneNr() {
    document.getElementById = function (PhoneNr) {

    };
    let PhoneNumber = document.getElementById("PhoneNumber").value;
    if (PhoneNumber >= 8){
        return true;
    } else {
        alert("The phone number is invalid, to get your buying confirmation write inn a valid phone number");
    }
}

function Email() {
    document.getElementById = function (Email) {

    };
    let Email = document.getElementById("Email").value;
    if (Email >= 2 + "@" + 2 + "." + 2){
        return true;
    } else {
        alert("The email is invalid, to get your tickets write inn a valid email");
    }
}

