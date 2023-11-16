
import {useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Stack, VStack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    const filteredProduct = productos.filter((product) => product.id == id);
    return (
        <>
            {
                filteredProduct.map((product) => {
                    return (
                        <Card width='350px' height='400px' align='center' borderRadius='20px' borderWidth='1px' borderColor='gray.300' key={product.id}>
                            <CardBody>
                                <Stack mt='6' spacing='3'
                                    align='stretch'>
                                    <p>Imagen</p>
                                    <Heading>{product.name}</Heading>
                                    <Text>
                                        {product.description}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <VStack>
                                    <Text color='blue.300' fontSize='2xl' fontWeight='bold'>
                                        ${product.price}
                                    </Text>
                                    <ButtonGroup spacing='1'>
                                        <ItemCount product={product}></ItemCount>
                                    </ButtonGroup>
                                    
                                </VStack>
                            </CardFooter>
                        </Card>
                    );
                })
            }
        </>
    )
}

export default ItemDetail