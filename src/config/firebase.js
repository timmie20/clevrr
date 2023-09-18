import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv3GM-seSfPtder15SXVp1HRrIYZWUZxI",
  authDomain: "clevrr-auth-dev.firebaseapp.com",
  projectId: "clevrr-auth-dev",
  storageBucket: "clevrr-auth-dev.appspot.com",
  messagingSenderId: "588522004241",
  appId: "1:588522004241:web:28f60bd7648411f4edb6b0",
  measurementId: "G-Y56CTZVE2E",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
