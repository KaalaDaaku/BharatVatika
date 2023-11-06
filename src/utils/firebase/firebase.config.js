import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-2JEuYl697QTTNfs36_iPl9nHfR01Wws",
  
    authDomain: "bharatvatika-ad7af.firebaseapp.com",
  
    projectId: "bharatvatika-ad7af",
  
    storageBucket: "bharatvatika-ad7af.appspot.com",
  
    messagingSenderId: "117924736287",
  
    appId: "1:117924736287:web:24f9879c31ecbe217cd42a",
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };