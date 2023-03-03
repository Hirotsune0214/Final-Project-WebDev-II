$(".registerButton").click(function (event) {
    showTab(event, $(this).attr("data-tab"));
});

function showTab(event, tabName) {
    $(".loginButton").hide();
    $(".registerButton").removeClass("loginButton");
    $(`#${tabName}`).show();
    console.log(event.currentTarget, "current Target");
    $(event.currentTarget).addClass("loginButton");

}

// login

$("#login").submit(function (event) {
    event.preventDefault();

    let lastName = $("#loginLastName").val();
    let firstName = $("#loginFirstName").val();
    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();

    if (lastName && firstName && email && password) {
        if (!validateLastName(lastName)) {
            $("#loginLastNameError").text("Please enter only alphabetical characters");
            return;
        }

        if (!validateFirstName(firstName)) {
            $("#loginFirstNameError").text("Please enter only alphabetical characters");
            return;
        }
        $("h1").html(`${lastName} Welcome Back`);
        setTimeout(function () {
            window.location = "https://www.google.co.jp";
        }, 3 * 1000);
    } else {
        if (!validateLastName(lastName)) {
            $("#loginLastNameError").text("Please enter your Last Name");
        }

        if (!!validateFirstName(firstName)) {
            $("#loginFirstNameError").text("Please enter appropriate characters");
        }

        if (!validateEmail(email)) {
            $("#emailError").text("Please enter a valid email address");
        }

        if (password.length < 8) {
            $("#passwordError").text("Please enter a password which is bigger than 8 characters");
        }

        if (validateLastName(lastName) && validatefirstName(firstName) && validateEmail(email) && password.length > 8) {
            $("#loginLastNameError").text("");
            $("#loginFirstNameError").text("");
            $("#emailError").text("");
            $("#passwordError").text("");
            console.log({
                lastName,
                firstName,
                email,
                password,
            });
        }
    }
});

// register

$("#register").submit(function (event) {

    event.preventDefault();

    let lastName = $("#registerLastName").val();
    let firstName = $("#registerFirstName").val();
    let email = $("#registerEmail").val();
    let password = $("#registerPassword").val();
    let conformPassword = $("#conformPassword").val();

    if (lastName && firstName && email && password && conformPassword) {
        if (!validateLastName(lastName)) {
            $("#loginLastNameError").text("Please enter only alphabetical characters");
            return;
        }

        if (!validateFirstName(firstName)) {
            $("#loginFirstNameError").text("Please enter only alphabetical characters");
            return;
        }
        $("h1").html(`${lastName} Welcome!!`);

        setTimeout(function () {
            window.location = "https://www.google.co.jp";
        }, 3 * 1000);
    } else {

        if (!validateLastName(lastName)) {
            $("#registerLastNameError").text("Please enter appropriate characters");
        }

        if (!validateFirstName(firstName)) {
            $("#registerFirstNameError").text("Please enter appropriate characters");
        }

        if (!validateEmail(email)) {
            $("#registerEmailError").text("Please enter a valid email address");
        }
        if (password.length < 8) {
            $("#registerPasswordError").text("Please enter a password which is bigger than 8");
        }

        if (conformPassword !== password) {
            $("#conformPasswordError").text("Please enter the same password");
        }

        if (validateLastName(lastName) && validatefirstName(firstName) && validateEmail(email) && password.length > 8 && conformPassword !== password) {
            $("#registerLastNameError").text("");
            $("#registerFirstNameError").text("");
            $("#registerEmailError").text("");
            $("#registerPasswordError").text("");
            $("#conformPasswordError").text("");
            console.log({
                lastName,
                firstName,
                email,
                password,
                conformPassword,
            });
        }
    }
});

function validateEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function validateLastName(lastName) {
    if (!lastName) {
        return false;
    }
    let lastNameRegex = /^[a-zA-Z]+$/;
    return lastNameRegex.test(lastName);
}

function validateFirstName(firstName) {
    if (!firstName) {
        return false;
    }
    let firstNameRegex = /^[a-zA-Z]+$/;
    return firstNameRegex.test(firstName);
}