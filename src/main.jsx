import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAcE8NvlxKGUDNANV-Eea0KjhwMDlg6PQ",
  authDomain: "comision-60815-fc.firebaseapp.com",
  projectId: "comision-60815-fc",
  storageBucket: "comision-60815-fc.appspot.com",
  messagingSenderId: "425044706104",
  appId: "1:425044706104:web:45b073a730fd1cb31bb7cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
