// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwPvkgtwOD6SGZV_J2LpLwq8mT9SZV76A",
  authDomain: "sdpgroupjs.firebaseapp.com",
  projectId: "sdpgroupjs",
  storageBucket: "sdpgroupjs.appspot.com",
  messagingSenderId: "866191024865",
  appId: "1:866191024865:web:f948be0ebfb235f479cda0",
  measurementId: "G-LH2KY4X3MK"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);

const storageRef = ref(storage);
export const actionEvidenceRef = ref(storage, "action-evidence/");
