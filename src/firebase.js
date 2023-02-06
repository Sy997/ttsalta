// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXYCVsUOQinPXFH5iVBkZ0OvPKj0BHAUY",
  authDomain: "dashboard-4195a.firebaseapp.com",
  projectId: "dashboard-4195a",
  storageBucket: "dashboard-4195a.appspot.com",
  messagingSenderId: "403667831644",
  appId: "1:403667831644:web:4d66791accfe8ae5c24f99",
  measurementId: "G-V1P6JSXMD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);
export default auth