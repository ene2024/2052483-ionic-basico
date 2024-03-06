const loginButton = document.getElementById("loginBt");
const signUpButton = document.getElementById("signUpBt");
const continueButton = document.getElementById("continueBt");
const user = document.getElementById("usuarioInput");
const password = document.getElementById("passwordInput");
const popUp = document.getElementById("popUp");

const msg = document.getElementById("message");

function login(){
    if(user.value === "" || password.value === ""){
        alert("Debe llenar todos los campos");
        return;
    }

    msg.innerHTML = "Inicio de sesion exitoso " + (user.value).bold();
    popUp.style.display = "flex";
}

function signUp(){
    if(user.value === "" || password.value === ""){
        alert("Debe llenar todos los campos");
        return;
    }

    msg.innerHTML = "Registro exitoso " + (user.value).bold();
    popUp.style.display = "flex";
}

function emptyFields(){
    user.value = "";
    password.value = "";
    msg.innerHTML = "";
    popUp.style.display = "none";
}   

loginButton.addEventListener('click', login);
signUpButton.addEventListener('click', signUp);

continueButton.addEventListener('click', emptyFields);