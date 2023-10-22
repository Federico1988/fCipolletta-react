import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({ name, description, price }) => {
    return (
        <Card maxW='sm' align='center' borderRadius='20px' borderWidth='1px' borderColor='gray.300' margin='10px'>
            <CardBody>
                <Stack mt='6' spacing='3'> 
                    <p>Imagen</p>
                    <Heading>{name}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <Text color='blue.300' fontSize='2xl' fontWeight='bold'> 
                        ${price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' >
                        <Link></Link>
                        Ver Detalle
                    </Button>

                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item