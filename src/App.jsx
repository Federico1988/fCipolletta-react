import './App.css'
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Cart } from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ItemDetail from './components/ItemDetail';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  const greeting = "Bienvenidos al show!";
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/product/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
