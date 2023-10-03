import React from 'react'
import LogoImg from '../img/logo.png'
import CartImg from '../img/cart.png'
import CartWidget from './CartWidget'


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
      <Box p='4' bg='red.400'>
        <p>CipoMusic</p>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>
              Partituras
            </MenuItem>
            <MenuItem>
              Audio
            </MenuItem>
            <MenuItem>
              Videos
            </MenuItem>

          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box p='4' bg='green.400'>
        <CartWidget />
      </Box>
    </Flex>
  )
}

export default NavBar