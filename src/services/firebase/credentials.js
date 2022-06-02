import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAvN50jI7vVwdL_DaadGcjd-GLrM8v6sg",
    authDomain: "pokegame-5d892.firebaseapp.com",
    projectId: "pokegame-5d892",
    storageBucket: "pokegame-5d892.appspot.com",
    messagingSenderId: "1069718135387",
    appId: "1:1069718135387:web:98597d1d092bfd6214157e"
};
const firebaseApp = initializeApp(firebaseConfig);

//export const db = getFirestore(firebaseApp);

export default firebaseApp;
