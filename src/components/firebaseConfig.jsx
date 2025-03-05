// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDRQE2QaQhqALz8ejNUZWpsBmBZMjT434M",
    authDomain: "ecomm-64600.firebaseapp.com",
    projectId: "ecomm-64600",
    storageBucket: "ecomm-64600.firebasestorage.app",
    messagingSenderId: "601768298200",
    appId: "1:601768298200:web:1da479e1a0b469c93d79ad",
    measurementId: "G-105XQT6MXS"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
