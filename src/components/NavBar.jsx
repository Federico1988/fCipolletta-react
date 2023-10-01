import React from 'react'
import LogoImg from '../img/logo.png'
import CartImg from '../img/cart.png'
const NavBar = () => {

  return (
    <nav>
        <div>
            <img className='logo' src={LogoImg} alt="brand logo" />
            <>DropDown</>
            <img className='logo' src={CartImg} alt="cart" />
        </div>
    </nav>
  )
}

export default NavBar