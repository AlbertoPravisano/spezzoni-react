// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_URL,
  authDomain: process.env.REACT_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID + ".appspot.com",
  messagingSenderId: "295326844826",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// https://console.firebase.google.com/project/spezzoni-34e9b/overview

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export const setToDb = async (path, value, id) =>
  await setDoc(doc(db, path, id), value);

export const getAllFromDb = async (path) => await getDocs(collection(db, path));

export const getFromDb = async (path, id) =>
  (await getDoc(doc(db, path, id)))?.data();

export const deleteFromDb = async (path, id) => {
  await deleteDoc(doc(db, path, id));
};
