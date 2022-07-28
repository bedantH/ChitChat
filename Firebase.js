import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    // firebase config goes here...
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export {app, db, auth};