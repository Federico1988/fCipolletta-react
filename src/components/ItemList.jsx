import React from 'react'
import Item from './Item'
import { HStack, Wrap, WrapItem } from '@chakra-ui/react'

const ItemList = ({ products }) => {
    return (
        <Wrap spacing='20px'>
            {
                products.map((prod) => {
                    return (
                        <WrapItem>
                            <Item
                                key={prod.id}
                                id={prod.id}
                                category={prod.category}
                                name={prod.name}
                                description={prod.description}
                                price={prod.price}
                            />
                        </WrapItem>
                    )
                })
            }

        </Wrap>
    )
}

export default ItemList
