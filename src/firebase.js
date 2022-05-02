// const firebaseConfig = {
//   apiKey: "AIzaSyCBKXqqMB4flG9wYdTGu3x8JqA5qtrdUvs",
//   authDomain: "react-help-queue-1acdd.firebaseapp.com",
//   projectId: "react-help-queue-1acdd",
//   storageBucket: "react-help-queue-1acdd.appspot.com",
//   messagingSenderId: "831465150360",
//   appId: "1:831465150360:web:dd308fbe406dd7aa65bded",
//   measurementId: "G-MWXT3RSW9D"
// };

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;