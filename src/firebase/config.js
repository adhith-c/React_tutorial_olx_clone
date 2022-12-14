import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXbVhivzsuSwg0GbV44_PpRQeByQgTHoY",
  authDomain: "olx-react-1bcd3.firebaseapp.com",
  projectId: "olx-react-1bcd3",
  storageBucket: "olx-react-1bcd3.appspot.com",
  messagingSenderId: "1026423293373",
  appId: "1:1026423293373:web:a1f099e5f99de50a63bed4",
  measurementId: "G-TWX74D7DTX"
};


export default firebase.initializeApp(firebaseConfig)