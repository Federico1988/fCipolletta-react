import React from 'react'
import { useContext, useEffect } from 'react'
import Item from './Item'
import { CartContext } from '../context/ShoppingCartContext'
import { Wrap, WrapItem, Box, Text } from '@chakra-ui/react'
import CartItem from './CartItem'

export const Cart = () => {


  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <Box p="1.5rem" align='left' spacing='10'>
      <Text fontSize="30px" margin='20px'>Elementos del Carrito:</Text>
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
  )
}
