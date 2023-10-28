/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC39klofWZEt9BRQbwxI4wGblNHhEkvYcc",
  authDomain: "filmyverse-278fb.firebaseapp.com",
  projectId: "filmyverse-278fb",
  storageBucket: "filmyverse-278fb.appspot.com",
  messagingSenderId: "551788863377",
  appId: "1:551788863377:web:09e53f19079282c66d8430",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
