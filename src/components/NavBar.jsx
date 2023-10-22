import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import { MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';


import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react'

const NavBar = () => {

  return (
    <Flex>
      <Box
        p='4'
        borderRadius='10px'
        bgGradient="linear(to-l, red.200, blue.200)">
        <Link to={"/"}>
          <h1>CipoMusic</h1>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            px={20}
            py={5}
            transition='all 0.2s'
            borderRadius='10px'
            bg={'gray.100'}
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.200' }}
            fontSize='4xl'  >
            Categorías
          </MenuButton>
          <MenuList>
            <MenuOptionGroup defaultValue='todos' type='radio'>
              <MenuItemOption value='todos'
                fontSize='4xl'>
                <Link to={`/`}>
                  Todos
                </Link></MenuItemOption>
              <MenuItemOption value='partituras'
                fontSize='4xl'>
                <Link to={`/category/1`}>
                  Partituras
                </Link>
              </MenuItemOption>
              <MenuItemOption value='audios'
                fontSize='4xl'>
                <Link to={`/category/2`}>
                  Audios
                </Link>
              </MenuItemOption>
              <MenuItemOption value='videos'
                fontSize='4xl'>
                <Link to={`/category/3`}>
                  Videos
                </Link>
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box
        p='6'
        bg='green.400'
        borderRadius='10px'>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  )
}

export default NavBar