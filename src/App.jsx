import './App.css'
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import Collections from './components/Collections';
import SendOrders from './components/SendOrders';
import ShoppingCartProvider from './context/ShoppingCartContext'

function App() {
  const greeting = "Bienvenidos al show!";
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
