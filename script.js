// // All import from firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// import {
//     getFirestore,
//     doc,
//     setDoc
// } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAa5-hOZ4jbqU7KkK9m4-_ZIEKq8VmraHA",
//     authDomain: "sir-ibrahim-website-clone.firebaseapp.com",
//     projectId: "sir-ibrahim-website-clone",
//     storageBucket: "sir-ibrahim-website-clone.firebasestorage.app",
//     messagingSenderId: "359251321885",
//     appId: "1:359251321885:web:76f5ad584397d632e612f4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Add a new document in collection "cities"
// async function setdata() {
//     await setDoc(doc(db, "cities", "LA"), {
//         name: "abdul rafay",
//         state: "karachi",
//         country: "pakistan"
//     });
// }
// setdata();

// // async function setData() {
// //   try {
// //     await setDoc(doc(db, "cities", "LA"), {
// //       name: "abdul rafay",
// //       state: "karachi",
// //       country: "pakistan"
// //     });
// //     console.log("Data successfully written!");
// //   } catch (error) {
// //     console.error("Error adding document: ", error);
// //   }
// // }

// // setData();
// // console.log("setData==>", setData)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    addDoc
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
async function setDataFirebase() {
    await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
        fullName: 'abdul rafay'
    });
}
setDataFirebase();

// Add a new document with a generated id
// Adddoc
// async function addData() {
//     const docRef = await addDoc(collection(db, "cities"), {
//         name: "Tokyo",
//         country: "Japan"
//     });
//     console.log("Document written with ID: ", docRef.id);
// }
// addData()