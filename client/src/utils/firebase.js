// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-a56f3.firebaseapp.com",
  projectId: "taskmanager-a56f3",
  storageBucket: "taskmanager-a56f3.appspot.com",
  messagingSenderId: "633317809159",
  appId: "1:633317809159:web:7e8a0d5359307695a11ea2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
