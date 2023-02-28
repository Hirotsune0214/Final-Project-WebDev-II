// attrは、HTML 要素の様々な属性の値を取得や変更ができるメソッド
// showTab is that tab shows or hidden 

$(".registerButton").click(function (event) {
    showTab(event, $(this).attr("data-tab"));
});

function showTab(event, tabName) {
    $(".loginButton").hide(); // hide HTML
    $(".registerButton").removeClass("loginButton"); // remove class
    // What does # mean??
    $(`#${tabName}`).show();
    console.log(event.currentTarget, "current Target");
    $(event.currentTarget).addClass("loginButton");
    // line 10 and 14
}

$("#login").submit(function (event) {
    // preventDefault - 実行したイベントがキャンセル可能である場合、イベントをキャンセルするためのメソッド
    event.preventDefault();

    let email = $("#loginEmail").val();
    let password = $("#loginPassword").val();

    if (!validateEmail(email)) {
        $("#emailError").text("Please enter a valid email address");
    }

    if (password.length < 8) {
        $("#passwordError").text("Please enter a password which is bigger than 8 characters");
    }

    // 何をしている??
    if (validateEmail(email) && password.length > 8) {
        $("#emailError").text("");
        $("#passwordError").text("");
        console.log({
            email,
            password,
        });
    }

});

/*

register時にエラーが表示されるようにする。

*/

$("#register").submit(function(event){

    // If something isn't correct then cancel
    event.preventDefault();

    let fullName = $("#registerName").val();
    let email = $("#registerEmail").val();
    let password = $("#registerPassword").val();
    let conformPassword = $("#conformPassword").val();

    // Check name
    if (!validateFullName(fullName)) {
        $("#fullNameError").text("Please enter a valid character");
        
    }

    // check email
    if (!validateEmail(email)) {
        $("#emailError").text("Please enter a valid email address");
    }

    // check password
    if (!validatePassword(password.length < 8 )) {
        $("#passwordError").text("Please enter a password which is bigger than 8");
    }

    // check conform password
    if (!validateconformPassword(conformPassword === password)) {
        $("#conformPasswordError").text("Please enter a same password");
    }

    if (validateFullName(fullName) && validateEmail(email) && password.length > 8 && conformPassword === password){
        $("#fullNameError").text("");
        $("#emailError").text("");
        $("#passwprdError").text("");
        $("#conformPasswordError").text("");
        console.log({
            fullName,
            email,
            password,
            conformPassword,
        });
    } 
});


// /\S+@\S+\.\S+/はメールでエラーがなかった場合に表示
function validateEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}