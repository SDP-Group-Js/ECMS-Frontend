import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwPvkgtwOD6SGZV_J2LpLwq8mT9SZV76A",
  authDomain: "sdpgroupjs.firebaseapp.com",
  projectId: "sdpgroupjs",
  storageBucket: "sdpgroupjs.appspot.com",
  messagingSenderId: "866191024865",
  appId: "1:866191024865:web:f948be0ebfb235f479cda0",
  measurementId: "G-LH2KY4X3MK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);