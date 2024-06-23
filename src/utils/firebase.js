// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8AdrtslxLncOqnC1eopViWirFOHhPkfg",
  authDomain: "netflix-gpt-c54bd.firebaseapp.com",
  projectId: "netflix-gpt-c54bd",
  storageBucket: "netflix-gpt-c54bd.appspot.com",
  messagingSenderId: "776785993125",
  appId: "1:776785993125:web:40e4c2bb95a636a7359c4c",
  measurementId: "G-RWWHCE78CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export{auth}