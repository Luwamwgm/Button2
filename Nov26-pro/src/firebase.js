// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqVt5KEZPxNQo3BINOIyXABEcNLyPoV2U",
  authDomain: "smy1-project.firebaseapp.com",
  projectId: "smy1-project",
  storageBucket: "smy1-project.appspot.com",
  messagingSenderId: "510334405291",
  appId: "1:510334405291:web:74113ada72e519142d05ee",
  measurementId: "G-HW7LVGEFZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);