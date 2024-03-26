import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBz20PEGFEPh8EPqYdjtuk8Xu7VAy6sgoU",
  authDomain: "xlscolon.firebaseapp.com",
  projectId: "xlscolon",
  storageBucket: "xlscolon.appspot.com",
  messagingSenderId: "166420616977",
  appId: "1:166420616977:web:fe26bf74a2aac79fb8deb0",
  measurementId: "G-T6PE4BHR88"
};

export default firebase.initializeApp(firebaseConfig)