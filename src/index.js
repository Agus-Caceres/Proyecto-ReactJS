import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArUAod3qwAjQXF9cfYqQ7SXM8Yr7JxS0k",
  authDomain: "catarsis-42440.firebaseapp.com",
  projectId: "catarsis-42440",
  storageBucket: "catarsis-42440.appspot.com",
  messagingSenderId: "401131105260",
  appId: "1:401131105260:web:e554157261382309d52ec9"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



