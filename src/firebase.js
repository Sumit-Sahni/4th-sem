

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB7nbAE1wbDWrPcB4AUOq8ORBtgb-zW1og",
    authDomain: "quick-3cc44.firebaseapp.com",
    projectId: "quick-3cc44",
    storageBucket: "quick-3cc44.appspot.com",
    messagingSenderId: "467333713808",
    appId: "1:467333713808:web:58509e8e1f1ded220f6d15"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

