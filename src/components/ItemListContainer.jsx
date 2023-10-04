import { Center } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <Center
      h='calc(100vh)'>
      <h1>{greeting}</h1>
    </Center>
  )
}

export default ItemListContainer