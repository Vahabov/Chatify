import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyB8WXwv3WZWu7AvLhrI2SyIu_ob35CtXIM",
  authDomain: "chatify-2d715.firebaseapp.com",
  projectId: "chatify-2d715",
  storageBucket: "chatify-2d715.appspot.com",
  messagingSenderId: "539283574070",
  appId: "1:539283574070:web:5244f6c4c02f726dabb797",
  measurementId: "G-6PF6FDQFQB"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase