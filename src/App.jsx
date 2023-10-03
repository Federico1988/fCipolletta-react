import './App.css'
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const greeting = "Bienvenidos al show!";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App
