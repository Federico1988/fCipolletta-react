import React from 'react'
import { Card, CardBody, Stack, VStack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({ id, name}) => {
    return (
        <Card width='350px' height='300px' align='center' borderRadius='20px' borderWidth='1px' borderColor='gray.300' flex>
            <CardBody>
                <Stack mt='6' spacing='3'
                    align='stretch'>
                    <p>Imagen</p>
                    <Heading>{name}</Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <VStack>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='green' color='yellow.100' >
                            <Link to={`/product/${id}`}>
                                Ver Detalle
                            </Link>
                        </Button>

                    </ButtonGroup>
                </VStack>
            </CardFooter>
        </Card>
    )
}

export default Item