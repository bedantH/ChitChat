import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCy8DmPe2NYtzVTJyzgsyy-XJqOzQHIrsc",
    authDomain: "chitchat-44c18.firebaseapp.com",
    databaseURL: "https://chitchat-44c18-default-rtdb.firebaseio.com",
    projectId: "chitchat-44c18",
    storageBucket: "chitchat-44c18.appspot.com",
    messagingSenderId: "917587393253",
    appId: "1:917587393253:web:761720990cba4773cfb20c",
    measurementId: "G-ZXK8XBJBFT"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export {app, db, auth};