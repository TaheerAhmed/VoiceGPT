import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


//change this firebaseConfig with your own fireBaseConfig
const firebaseConfig = {
  apiKey: process.env.FIREBASEKEY?.toString(),
  authDomain: process.env.FIREBASE_AUTHDOMAIN?.toString(),
  projectId: "chatgptvo-27c3e",
  storageBucket: "chatgptvo-27c3e.appspot.com",
  messagingSenderId: "708447332825",
  appId: process.env.FIREBASE_APP_ID?.toString(),
  measurementId: process.env.FIREBASE_MID?.toString(),
};

// Initialize Firebase
const app = getApps().length?getApp():initializeApp(firebaseConfig)

const db=getFirestore(app)

export {db}