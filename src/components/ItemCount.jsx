import { Wrap, WrapItem, Box, Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { FaShoppingCart } from 'react-icons/fa';

const ItemCount = ({ product }) => {
    const [count, setCount] = useState(0);

    const { addToCart } = useContext(CartContext);
    return (
        <Wrap>
            <WrapItem>
                <Button variant='outline' colorScheme='blue' m={1} onClick={() => {
                    if (count > 0) setCount(count - 1)
                }}>
                    -
                </Button>
            </WrapItem>
            <WrapItem>
                <IconButton
                    aria-label='Add to Cart'
                    icon={<FaShoppingCart />}
                    onClick={() => addToCart(product, count)}
                    m={1}
                    colorScheme={count !== 0 ? 'green' : 'gray'} />
            </WrapItem>
            <WrapItem>
                <Text fontSize='md' fontWeight='bold'>
                    {count}
                </Text>
            </WrapItem>
            <WrapItem>
                <Button variant='outline' colorScheme='blue' m={1} onClick={() => {
                    if (count < product.stock) setCount(count + 1)
                }}>
                    +
                </Button>
            </WrapItem>
        </Wrap>
    )
}

export default ItemCount