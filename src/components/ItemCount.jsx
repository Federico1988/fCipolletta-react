import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react'

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(0);

    return (
        <Flex>
            <Box>
                <Button variant='outline' colorScheme='blue' m={1} onClick={() => {
                    if (count > 0) setCount(count - 1)
                }}>
                    -
                </Button>
                <Button m={1} colorScheme={count !== 0 ? 'green' : 'gray'}>{count}</Button>

                <Button variant='outline' colorScheme='blue' m={1} onClick={() => {
                    if (count < stock) setCount(count + 1)
                }}>
                    +
                </Button>
            </Box>
        </Flex>
    )
}

export default ItemCount