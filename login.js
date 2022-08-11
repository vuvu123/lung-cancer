const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        loginErrorMsg.style.opacity = 0;
        window.location = "https://mybinder.org/v2/gh/vuvu123/lung-cancer/3fd2be689ec6d7ae2ed1ce276a5a4ec2f454355d?urlpath=lab%2Ftree%2Flung-cancer-analysis.ipynb"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})