import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBrVtdoOBtV0wBV4xhyNO0RLZFXAOVpkF8",
    authDomain: "jcposso13.firebaseapp.com",
    projectId: "jcposso13",
    storageBucket: "jcposso13.appspot.com",
    messagingSenderId: "139255437715",
    appId: "1:139255437715:web:f082acf41d33942836b066"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
