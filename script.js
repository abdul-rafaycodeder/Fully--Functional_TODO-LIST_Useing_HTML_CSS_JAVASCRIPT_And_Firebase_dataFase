//----------------------------------------Main code-------------------------------------//

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjqSmBKT-AFlfa6QmvXx_h0RcUVT7xKms",
  authDomain: "todo-list-c87c6.firebaseapp.com",
  projectId: "todo-list-c87c6",
  storageBucket: "todo-list-c87c6.appspot.com",
  messagingSenderId: "847699866982",
  appId: "1:847699866982:web:772e02a793daa9e55044a7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addBtn = document.getElementById("addBtn");
const quoteInput = document.getElementById("quoteInput");
const quoteList = document.getElementById("quoteList");

const quoteCollection = collection(db, "quotes");

addBtn.addEventListener("click", addQuote);

quoteInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addQuote();
  }
});


// ✅ ADD
async function addQuote() {
  const text = quoteInput.value.trim();

  if (text === "") {
    alert("Please enter something first!");
    return;
  }

  await addDoc(quoteCollection, {
    quote: text,
    time: serverTimestamp(),
  });

  quoteInput.value = "";
  loadQuotes();
}


// ✅ LOAD
async function loadQuotes() {

  quoteList.innerHTML = "";

  const querySnapshot = await getDocs(quoteCollection);

  querySnapshot.forEach((docSnap) => {

    const li = document.createElement("li");
    li.textContent = docSnap.data().quote + " ";

    // ✏ EDIT BUTTON
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", async () => {
      const newText = prompt("Edit your quote:", docSnap.data().quote);

      if (newText !== null && newText.trim() !== "") {
        await updateDoc(doc(db, "quotes", docSnap.id), {
          quote: newText.trim()
        });
        loadQuotes();
      }
    });

    // 🗑 DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", async () => {
      await deleteDoc(doc(db, "quotes", docSnap.id));
      loadQuotes();
    });

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    quoteList.appendChild(li);
  });
}

// Initial load
loadQuotes();


