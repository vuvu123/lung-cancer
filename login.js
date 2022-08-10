const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        loginErrorMsg.style.opacity = 0;
        window.location = "https://mybinder.org/v2/gh/vuvu123/lung-cancer/7dca4f7761b04be5f2179a36b4308eaa96b51056?urlpath=lab%2Ftree%2Flung-cancer-analysis.ipynb"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})