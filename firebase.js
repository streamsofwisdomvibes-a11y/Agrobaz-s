import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDy96v-xCFidi8EG5i1MNHkAOL4M5-Geys",
  authDomain: "agrobaz-1e215.firebaseapp.com",
  projectId: "agrobaz-1e215",
  storageBucket: "agrobaz-1e215.firebasestorage.app",
  messagingSenderId: "390959356085",
  appId: "1:390959356085:web:1fd2580f98ddb204e0c6fc",
  measurementId: "G-8HVJFTR61B"
};


const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;