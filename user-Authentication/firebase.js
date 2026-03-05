const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const signupContainer = document.querySelector(".sign-up-container");
const loginContainer = document.querySelector(".sign-in-container");


showSignup.onclick = () => {
loginContainer.style.display = "none";
signupContainer.style.display = "block";
}

showLogin.onclick = () => {
signupContainer.style.display = "none";
loginContainer.style.display = "block";
}


// signup
document.getElementById("signupForm").addEventListener("submit",function(e){

e.preventDefault();

let name = document.getElementById("signupName").value;
let email = document.getElementById("signupEmail").value;
let password = document.getElementById("signupPassword").value;

localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("Account Created Successfully!");

signupContainer.style.display="none";
loginContainer.style.display="block";

});


// login
document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let savedEmail = localStorage.getItem("email");
let savedPassword = localStorage.getItem("password");

if(email === savedEmail && password === savedPassword){
alert("Login Successful 🎉");
}else{
alert("Invalid Email or Password");
}

});