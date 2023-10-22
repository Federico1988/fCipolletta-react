import React from 'react'
import LogoImg from '../img/logo.png'
import CartImg from '../img/cart.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';


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
            fontSize='3xl'>
            Categorías
          </MenuButton>
          <MenuList>
            <MenuItem
              fontSize='2xl'>
              <Link to={`/`}>
                Todos
              </Link>
            </MenuItem>
            <MenuItem
              fontSize='2xl'>
              <Link to={`/category/${'cat1'}`}>
                Partituras
              </Link>
            </MenuItem>
            <MenuItem
              fontSize='2xl'>
              <Link to={`/category/${'cat2'}`}>
                Audios
              </Link>
            </MenuItem>
            <MenuItem
              fontSize='2xl'>
              <Link to={`/category/${'cat3'}`}>
                Videos
              </Link>
            </MenuItem>

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