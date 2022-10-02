import firebase from 'firebase/compat/app';
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDaUZ77g8Y-7O_LTYLluNqs_xAQa3wAfro",
    authDomain: "noteproject-37e61.firebaseapp.com",
    databaseURL: "https://noteproject-37e61-default-rtdb.firebaseio.com",
    projectId: "noteproject-37e61",
    storageBucket: "noteproject-37e61.appspot.com",
    messagingSenderId: "213555298656",
    appId: "1:213555298656:web:94afb3d08935c47c40de05"
  };

  firebase.initializeApp(firebaseConfig); 

  export const noteData = getDatabase();