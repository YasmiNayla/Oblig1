const userRegister[];  // Creation of an empty array

    function showUserRegister() {
        let out = "<table><tr>"
        "<th>Film</th><th>Amount</th><th>Name</th><th>Surname</th><th>PhoneNumber</th><th>Email</th>"
        "</tr>";
        out + - = "</tr>";
        {
            $("#userRegister").html(out);
        }
    }

      // Table from info inserted in input boxes

    function register () {
        const Movie = $("#Movie").val();
        const Amount = $("#Amount").val();
        const Name = $("#Name").val();
        const Surname = $("#Surname").val();
        const PhoneNr = $("#PhoneNr").val();
        const Email = $("#Email").val();

    const person = {
        Movie : Movie,
        Amount : Amount,
        Name : Name,
        PhoneNr : PhoneNr,
        Email : Email
    };
userRegister.push(person);
$('input').val('');

showUserRegister()}    /// Shows the table

////

function reg () {

function choose(movies){
    alert ("You will watch: "+ document.getElementById("movies").value);
}

for (let p of persRegister)
function showAmount() {
    document.getElementById = function (Amount) {

        let Amount = document.getElementById("Amount").value;
        if (Amount >= 1){
            return true;
        }
        if (Amount === '') {
            $("#Movie").after(errorMessage);
        }
    };
}
function showName() {
    document.getElementById = function (Name) {

    };
    let Name = document.getElementById("Name").value;
    if (Name >= 3){
        return true;
    } else {
        alert("You have to write the name you have on your Identification Card");
    }
}

function showSurname() {
    document.getElementById = function (Surname) {

    };
    let Surname = document.getElementById("Surname").value;
    if (Surname >= 3){
        return true;
    } else {
        alert("You have to write the surname you have on your Identification Card");
    }
}

function showPhoneNr() {
    document.getElementById = function (PhoneNr) {

    };
    let PhoneNr = document.getElementById("PhoneNr").value;
    if (PhoneNr >= 8){
        return true;
    } else {
        alert("The phone number is invalid, to get your buying confirmation write inn a valid phone number");
    }
}

function Email() {
    document.getElementById = function (Email) {
        const Email = document.getElementById("Email");
            Email.addEventListener("blur", () => {
                let regex =
                /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
                let s = Email.value;
                if (regex.test(s)) {
                    Email.classList.remove("is-invalid");
                    emailError = true;
                } else {
                    Email.classList.add("is-invalid");
                    emailError = false;
                }
            });
    };
    let Email = document.getElementById("Email").value;
    if (Email >= 2 + "@" + 2 + "." + 2){
        return true;
    } else {
        alert("The email is invalid, to get your tickets write inn a valid email");
    }
}

}


/// Red letters under the input fields if the box is empty
function register () {
    const Movie = $("#Movie").val();
    const Amount = $("#Amount").val();
    const Name = $("#Name").val();
    const Surname = $("#Surname").val();
    const PhoneNr = $("#PhoneNr").val();
    const Email = $("#Email").val();

    if (Movie === '' || Amount === '' || Surname === '' || PhoneNr === '' || Email) {
        const errorMessage = "<span style ='color: Maroon; font-size: 12px'> Fill in all boxes</span";
        if (Movie === '') {
            $("#Movie").after(errorMessage);
        }
        if (Amount === '') {
            $("#Amount").after(errorMessage);
        }
        if (Name === '') {
            $("#Name").after(errorMessage);
        }
        if (Surame === '') {
            $("#Surame").after(errorMessage);
        }
        if (PhoneNr === '') {
            $("#PhoneNr").after(errorMessage);
        }
        if (Email === '') {
            $("#Email").after(errorMessage);
        }
    } else {
        const person = {
            Movie: Movie,
            Amount: Amount,
            Name: Name,
            PhoneNr: PhoneNr,
            Email: Email
        };
        userRegister.push(person);
        $('input').val('');

        showUserRegister()
    }            // Inserts information into array
}


// Clear all tickets stored in the momentary array.
function clearAll() {
        userRegister.length = 0;
        showUserRegister();
}
