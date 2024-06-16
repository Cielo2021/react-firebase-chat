import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-575be.firebaseapp.com",
  projectId: "reactchat-575be",
  storageBucket: "reactchat-575be.appspot.com",
  messagingSenderId: "127675371389",
  appId: "1:127675371389:web:80bac1b49a196caa620614",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
