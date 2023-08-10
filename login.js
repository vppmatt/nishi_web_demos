const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginError = document.getElementById("login-error-msg");

loginButton.addEventListener("click" , (e)=>{
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username == "user" && password == "pass"){
        alert("logged in ")
    }
    else{
        loginError.style.opacity = 1 ;
    }
})