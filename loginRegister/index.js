// attrは、HTML 要素の様々な属性の値を取得や変更ができるメソッド
// showTab is that tab shows or hidden 

$(".registerButton").click(function (event) {
    showTab(event, $(this).attr("data-tab"));
});

function showTab(event, tabName) {
    $(".loginButton").hide(); // hide HTML
    $(".registerButton").removeClass("loginButton"); // remove class
    // What does # mean??
    $(`#${tabName}`).show(); // data-tab
    console.log(event.currentTarget, "current Target");
    $(event.currentTarget).addClass("loginButton");

}

// login

$("#login").submit(function (event) {
    // preventDefault - 実行したイベントがキャンセル可能である場合、イベントをキャンセルするためのメソッド
    event.preventDefault();

    let lastName = $("#loginLastName").val();
    let firstName = $("#loginFirstName").val();
    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();


    if (lastName && firstName && email && password) {
        $("h1").html(`${lastName} Welcome Back`);
        setTimeout(function() {
        window.location = "https://www.google.co.jp";
    }, 3*1000);
    } else {


        if (!lastName) {
            $("#lastNameError").text("Please enter appropriate characters");
        }

        if (!firstName) {
            $("#firstNameError").text("Please enter appropriate characters");
        }

        if (!validateEmail(email)) {
            $("#emailError").text("Please enter a valid email address");
        }

        if (password.length < 8) {
            $("#passwordError").text("Please enter a password which is bigger than 8 characters");
        }

        if (lastName && firstName && validateEmail(email) && password.length > 8) {
            $("#lastNameError").text("");
            $("#firstNameError").text("");
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

    // If something isn't correct then cancel
    event.preventDefault();

    let lastName = $("#registerLastName").val();
    let firstName = $("#registerFirstName").val();
    let email = $("#registerEmail").val();
    let password = $("#registerPassword").val();
    let conformPassword = $("#conformPassword").val();

    if (lastName && firstName && email && password && conformPassword) {
        $("h1").html(`${lastName} Welcome!!`);

        setTimeout(function() {
            window.location = "https://www.google.co.jp";
        }, 3*1000);
    } else {

        // Check name
        if (!lastName) {
            $("#registerLastName").text("Please enter appropriate characters");
        }

        if (!firstName) {
            $("#registerFirstName").text("Please enter appropriate characters");
        }

        // check email
        if (!validateEmail(email)) {
            $("#registerEmailError").text("Please enter a valid email address");
        }

        // check password
        if (password.length < 8) {
            $("#registerPasswordError").text("Please enter a password which is bigger than 8");
        }

        // check conform password
        if (conformPassword !== password) {
            $("#conformPasswordError").text("Please enter a same password");
        }

        if (lastName && firstName && validateEmail(email) && password.length > 8 && conformPassword !== password) {
            $("#lastNameError").text("");
            $("#firstNameError").text("");
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

        /* if a user completes register then show "Welcome last name"
        $("h1").html(`Welcome ${lastName}`);
        
        
        */

    }
});


// /\S+@\S+\.\S+/はメールでエラーがなかった場合に表示
function validateEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function lastName() {
    let lastNameRegex = /^[a-zA-Z]+$/;
    return lastNameRegex.test(lastName);
}

function firstName() {
    let firstRegex = /^[a-zA-Z]+$/;
    return firstRegex.test(firstName);
}
