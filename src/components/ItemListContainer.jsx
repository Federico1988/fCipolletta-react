import { Center } from '@chakra-ui/react'
import React from 'react'
import Item from './Item'

const ItemListContainer = ({ greeting }) => {
  return (
    <Center
      h='calc(100vh)'>
      <h1>{greeting}</h1>
      <Item >

      </Item>
    </Center>
  )
}

export default ItemListContainer