import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDaUZ77g8Y-7O_LTYLluNqs_xAQa3wAfro",
    authDomain: "noteproject-37e61.firebaseapp.com",
    databaseURL: "https://noteproject-37e61-default-rtdb.firebaseio.com",
    projectId: "noteproject-37e61",
    storageBucket: "noteproject-37e61.appspot.com",
    messagingSenderId: "213555298656",
    appId: "1:213555298656:web:94afb3d08935c47c40de05"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const firebaseConnect = firebase.initializeApp(firebaseConfig);


const db = getDatabase();
const starCountRef = ref(db, 'post/');


// Select database
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    // updateStarCount(postElement, data);
});



// Update database
// set(starCountRef, {
//     id: 1,
//     title: "wedwdw",
//     name: 'wdwefdwef'

// })
//     .then(() => {
//         console.log("ok");
//     })
//     .catch((error) => {
//         console.log(error);
//     })



