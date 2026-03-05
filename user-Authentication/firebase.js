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
document.getElementById("signupForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account Created Successfully!");

    signupContainer.style.display = "none";
    loginContainer.style.display = "block";

});


// login
document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        alert("Login Successful 🎉");
    } else {
        alert("Invalid Email or Password");
    }

});

//-----------------------------User Authentication----------------------//

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js"

import {
    getAuth,
    createUserWithEmailAndPassword,


} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjqSmBKT-AFlfa6QmvXx_h0RcUVT7xKms",
    authDomain: "todo-list-c87c6.firebaseapp.com",
    projectId: "todo-list-c87c6",
    storageBucket: "todo-list-c87c6.firebasestorage.app",
    messagingSenderId: "847699866982",
    appId: "1:847699866982:web:772e02a793daa9e55044a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


async function signUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}