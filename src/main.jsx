import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCAcE8NvlxKGUDNANV-Eea0KjhwMDlg6PQ",
  authDomain: "comision-60815-fc.firebaseapp.com",
  projectId: "comision-60815-fc",
  storageBucket: "comision-60815-fc.appspot.com",
  messagingSenderId: "425044706104",
  appId: "1:425044706104:web:45b073a730fd1cb31bb7cd"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
