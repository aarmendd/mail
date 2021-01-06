import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2o55kFlpF7f7ecvAiDpCcob04ZUbMXEk",
  authDomain: "clone-a50c3.firebaseapp.com",
  projectId: "clone-a50c3",
  storageBucket: "clone-a50c3.appspot.com",
  messagingSenderId: "104283837281",
  appId: "1:104283837281:web:805ce6e911403d8844ab20",
  measurementId: "G-ZTJ8Q2YFNG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
