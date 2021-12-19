// Import the function to initialize the Firebase application
import { initializeApp } from "firebase/app";

// Credentials for the Firebase application
const firebaseConfig = {
  apiKey: "AIzaSyDjAoX_X8_AR1pW_wcMZMtYgOOpAFHKZeE",
  authDomain: "plataforma-sistema-peajes.firebaseapp.com",
  projectId: "plataforma-sistema-peajes",
  storageBucket: "plataforma-sistema-peajes.appspot.com",
  messagingSenderId: "306635353324",
  appId: "1:306635353324:web:8fca9f3e4ec219e95209c9"
};

// Initialize the application and save it in firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Export firebaseApp to be able to use it anywhere in the application
export default firebaseApp;