import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBeXNXIb6hGypuSZ9qsEvioWZnu4-tpe9g",
  authDomain: "siddhant-project-plan.firebaseapp.com",
  databaseURL: "https://siddhant-project-plan.firebaseio.com",
  projectId: "siddhant-project-plan",
  storageBucket: "siddhant-project-plan.appspot.com",
  messagingSenderId: "281936334512",
  appId: "1:281936334512:web:49022a5db3e18f4846b575",
  measurementId: "G-XTVLCLCEF7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
