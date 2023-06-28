import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCVT7PXAMGRTSMtLzt7uUpZaUryEcrZXJ0",
    authDomain: "chat-app-25bdb.firebaseapp.com",
    projectId: "chat-app-25bdb",
    storageBucket: "chat-app-25bdb.appspot.com",
    messagingSenderId: "313214958944",
    appId: "1:313214958944:web:0777d35dc2484c8537b205"
  };

  firebase.initializeApp(firebaseConfig);

  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {db, auth, timestamp};