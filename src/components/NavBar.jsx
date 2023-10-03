import React from 'react'
import LogoImg from '../img/logo.png'
import CartImg from '../img/cart.png'
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

    <div>

      <Flex>
        <Box p='4' bg='red.400'>
          <p>Marca</p>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton>
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>
                Opcion 1
              </MenuItem>
              <MenuItem>
                Opcion 2
              </MenuItem>

            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p='4' bg='green.400'>

        </Box>
      </Flex>
    </div>

  )
}

export default NavBar