import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    serverTimestamp,
    addDoc,
    getDocs,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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
const db = getFirestore(app);

// Add a new document in collection "cities"


// Setdoc
// async function setDataFirebase() {
//     await setDoc(doc(db, "cities", "LA"), {
//         name: "Los Angeles",
//         state: "CA",
//         country: "USA",
//         fullName: 'abdul rafay'
//     });
// }
// setDataFirebase();


var addbtn = document.getElementById("addBtn");
var quoteList = document.getElementById("quoteList");
addbtn.addEventListener("click", addQuote);

var quoteInput = document.getElementById("quoteInput");
const quoteCollection = collection(db, "quotes");
async function addQuote() {
    await addDoc(quoteCollection, {
        quote: quoteInput.value,
        time: serverTimestamp(),
    });
}

async function getQuote() {
    const querySnapshot = await getDocs(quoteCollection);
    querySnapshot.forEach((doc) => {
        console.log("id=>", doc.id, " => ", doc.data().quote);
        const li = document.createElement("li");
        // li.innerHTML = ` ${doc.data().quote} + <button>Edit</button>`

        li.textContent = doc.data().quote + " ";
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function () {
            editBtn(doc.id, doc.data().quote)
        })


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        quoteList.appendChild(li);
    });
}
getQuote();

async function editBtn(id, oldQuote) {
    // await updateDoc(doc(db,"quote",id))
    const newQuote = await prompt("enter new quote", oldQuote)
    console.log("new quote", newQuote)
}


