import React from 'react'
import { useContext, useState } from 'react'
import { Card, CardBody, Stack, VStack, Heading, Divider, CardFooter, Text, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

import { CartContext } from '../context/ShoppingCartContext'

const CartItem = (item) => {


    const { removeItem } = useContext(CartContext);

    return (
        <Card width='350px' height='300px' align='center' borderRadius='20px' borderWidth='1px' borderColor='gray.300' flex>
            <CardBody>
                <Stack mt='6' spacing='3'
                    align='stretch'>
                    <p>Imagen</p>
                    <Heading>{item.name}</Heading>
                    <Text>Cantidad {item.cantidad}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>

                    <Button onClick={() => { removeItem(item); }} m={1} colorScheme={'red'}>Eliminar</Button>
            </CardFooter>
        </Card>
    )
}

export default CartItem