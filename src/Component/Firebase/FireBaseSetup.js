// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// import { setPersistence, browserSessionPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBitIsp6lN4JOidmjcS1_flZqJ5Bxyh8l4",
  authDomain: "codepen-3f023.firebaseapp.com",
  projectId: "codepen-3f023",
  storageBucket: "codepen-3f023.appspot.com",
  messagingSenderId: "27799791647",
  appId: "1:27799791647:web:f1b2efc121cd3c025ccd2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);

// setPersistence(auth, browserSessionPersistence)
//   .then(() => {
//     console.log("Auth persistence set successfully");
//   })
//   .catch((error) => {
//     console.error("Error setting auth persistence:", error);
//   });
