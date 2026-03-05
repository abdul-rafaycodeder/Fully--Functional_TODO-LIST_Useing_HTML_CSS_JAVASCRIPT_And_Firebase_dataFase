
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


// ---------------------------==> Sign Up <==------------------------------//


function signUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
signUp()
