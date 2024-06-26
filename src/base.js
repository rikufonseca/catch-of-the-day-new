import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSqN7n9PPeUjnzN9ajdu479LEUH1yGj68",
  authDomain: "catch-of-the-day-new-9ef0a.firebaseapp.com",
  databaseURL:
    "https://catch-of-the-day-new-9ef0a-default-rtdb.europe-west1.firebasedatabase.app",
});

// set an instance provided by Rebase library, to interact with firebase through the firebaseApp object, so we can use it anywhere in our app
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
