import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjqSmBKT-AFlfa6QmvXx_h0RcUVT7xKms",
    authDomain: "todo-list-c87c6.firebaseapp.com",
    projectId: "todo-list-c87c6",
    storageBucket: "todo-list-c87c6.appspot.com",
    messagingSenderId: "847699866982",
    appId: "1:847699866982:web:772e02a793daa9e55044a7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const authMessage = document.getElementById("authMessage");

// Sign Up
signUpBtn.addEventListener("click", () => {
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            authMessage.textContent = "Signup successful! You can login now.";
            authMessage.style.color = "green";
        })
        .catch(error => {
            authMessage.textContent = error.message;
            authMessage.style.color = "red";
        });
});

// Login
loginBtn.addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            window.location.href = "index.html"; // redirect to main page
        })
        .catch(error => {
            authMessage.textContent = error.message;
            authMessage.style.color = "red";
        });
});