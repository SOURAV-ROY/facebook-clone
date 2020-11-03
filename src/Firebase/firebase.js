// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDSZTLeC97NJDMTRq8zwEVJY_XG_JJEEFo",
//     authDomain: "facebook-start.firebaseapp.com",
//     databaseURL: "https://facebook-start.firebaseio.com",
//     projectId: "facebook-start",
//     storageBucket: "facebook-start.appspot.com",
//     messagingSenderId: "10577863128",
//     appId: "1:10577863128:web:f8e90771660d6c745092ad",
//     measurementId: "G-KBBZ2LXZKB"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIPCeBAim7knjhXnbbdxoaCRrK3_BHYnM",
    authDomain: "facebook-sourav.firebaseapp.com",
    databaseURL: "https://facebook-sourav.firebaseio.com",
    projectId: "facebook-sourav",
    storageBucket: "facebook-sourav.appspot.com",
    messagingSenderId: "87483720050",
    appId: "1:87483720050:web:77570b3610b50d8fb2bdeb",
    measurementId: "G-GJ0796W4P6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
