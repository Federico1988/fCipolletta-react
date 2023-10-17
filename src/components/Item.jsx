import { Card } from '@chakra-ui/react'
import React from 'react'

const Item = ({ name }) => {
    return (
        <Card>
            <CardBody>
                <Stack>
                    <p>Imagen</p>
                    <Heading>{name}</Heading>
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