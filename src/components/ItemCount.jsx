import { Box, Button, Flex } from '@chakra-ui/react';
import {useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({ product }) => {
    const [count, setCount] = useState(0);

    const {addToCart} = useContext(CartContext);
    return (
        <Flex>
            <Box>
                <Button variant='outline' colorScheme='blue' m={1} onClick={() => {
                    if (count > 0) setCount(count - 1)
                }}>
                    -
                </Button>
                <Button onClick={() => addToCart(product,count)} m={1} colorScheme={count !== 0 ? 'green' : 'gray'}>{count}</Button>

                <Button variant='outline' colorScheme='blue' m={1} onClick={() => {
                    if (count < product.stock) setCount(count + 1)
                }}>
                    +
                </Button>
            </Box>
        </Flex>
    )
}

export default ItemCount