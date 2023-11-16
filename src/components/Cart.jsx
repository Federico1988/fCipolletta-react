import React from 'react'
import { useContext, useState, useEffect } from 'react'
import Item from './Item'
import { CartContext } from '../context/ShoppingCartContext'
import { Wrap, WrapItem, Box, Text } from '@chakra-ui/react'
import CartItem from './CartItem'

import { collection, addDoc, getFirestore } from 'firebase/firestore';

export const Cart = () => {
  const { cart,removeAll } = useContext(CartContext);
  const totalCost = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    if (!isNaN(itemPrice)) {
      return total + itemPrice * item.cantidad;
    } else {
      return total;
    }
  }, 0);
  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [idList, setIdList] = useState("");
  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length == 0) {
      alert("El carrito esta vacio!!");
    }
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    removeAll();
    alert("Orden Enviada. Gracias por su compra!");
    
    setEmail('');
    setNombre('');
    
  }
  const order = {
    nombre,
    email,
    idList
  }
  const ordersCollection = collection(db, "Mi orden");
  return (
    <>

      <Box p="1.5rem" align='left' spacing='10'>
        {cart.length === 0 ? (
          <Text fontSize="30px" margin="20px">No hay elementos en el carrito.</Text>
        ) : (
          <Text fontSize="30px" margin="20px">Elementos del Carrito:</Text>
        )}

        <Wrap spacing='20px'>
          {
            cart.map((prod) => {
              return (
                <WrapItem key={prod.id}>
                  <CartItem
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    cantidad={prod.cantidad}
                  />
                </WrapItem>
              )
            })
          }
        </Wrap>
        </Box>
        <h1>Total de compra: ${totalCost}</h1>
      <div style={{ textAlign: 'center', margin: '50px' }}>
        <h1 style={{ marginBottom: '20px' }}>Formulario de Compra</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ marginBottom: '15px', width: '300px' }}>
            <label htmlFor="nombre" style={{ marginBottom: '5px', display: 'block' }}>
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Ingrese el Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px', width: '300px' }}>
            <label htmlFor="email" style={{ marginBottom: '5px', display: 'block' }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese el email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={(e) => setIdList(cart.map(item => ({ id: item.id, qty: item.cantidad })))}
              style={{
                padding: '10px 20px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}>
              Enviar Compra
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
