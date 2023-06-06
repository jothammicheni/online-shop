
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
    apiKey: "AIzaSyBM26NsD49Nggsaxvf_cL8Rcts0UK2KiUE",
    authDomain: "online-shop-a64d2.firebaseapp.com",
    projectId: "online-shop-a64d2",
    storageBucket: "online-shop-a64d2.appspot.com",
    messagingSenderId: "769584874674",
    appId: "1:769584874674:web:e8b308a55ffc0b1769b5ab",
    measurementId: "G-PR7HXWM4HB"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataref=firebase.database();
  export default firebase;