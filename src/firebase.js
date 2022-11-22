import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCtcWgXRyTPwmz_rU6cru2vqdG1Vp2NsY",
  authDomain: "netflix-clone-58acd.firebaseapp.com",
  projectId: "netflix-clone-58acd",
  storageBucket: "netflix-clone-58acd.appspot.com",
  messagingSenderId: "619834952406",
  appId: "1:619834952406:web:33c743d9ce3e5b1a005777",
  measurementId: "G-HJ4BWEZQCS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;