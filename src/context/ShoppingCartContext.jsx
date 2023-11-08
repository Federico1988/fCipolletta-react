import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);
    useEffect(() => {
        console.log(cartList);
    }, [cartList]);
    
    const addToCart = (item, qty) => {
        setCartList([...cartList, { ...item, qty }]);
    }

   const removeItem = (itemId) => {

    }

    const removeAll = () => {

    }

    const isInCart = (itemId) => {
        return false;
    }
    return (
        <CartContext.Provider value={{cartList, setCartList, addToCart, removeItem, removeAll, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;
