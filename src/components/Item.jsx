import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({ name, description, price }) => {
    return (
        <Card>
            <CardBody>
                <Stack>
                    <p>Imagen</p>
                    <Heading>{name}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <Text>
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