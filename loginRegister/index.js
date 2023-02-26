// attrは、HTML 要素の様々な属性の値を取得や変更ができるメソッド
// showTab is variable??

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

    if (validateEmail(email) && password.length > 8) {
        $("#emailError").text("");
        $("#passwordError").text("");
        console.log({
            email,
            password,
        });
    }

});


// ??
function validateEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}