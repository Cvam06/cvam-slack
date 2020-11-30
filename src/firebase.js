import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCcMiw8-fo9R9xivQopvl3xrDuXG4pIxl4",
    authDomain: "cvam-slack-c0a4c.firebaseapp.com",
    databaseURL: "https://cvam-slack-c0a4c.firebaseio.com",
    projectId: "cvam-slack-c0a4c",
    storageBucket: "cvam-slack-c0a4c.appspot.com",
    messagingSenderId: "288585964657",
    appId: "1:288585964657:web:5152203a1ecebdb346cfd0",
    measurementId: "G-QFDPSGMVQT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;