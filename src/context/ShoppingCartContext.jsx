import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

    const cart = [];
    const [cartList, setCartList] = useState(cart);
    const [badge, setBadge] = useState([0]);
    /* useEffect(() => {
         console.log(cart);
     }, [cart]);*/

    const addToCart = (item, qty) => {
        if (qty === 0) return;
        if (cart.includes(item))
            item.cantidad += qty;
        else {
            item.cantidad = qty;
            //setCartList(prevState => [...prevState, { ...item, qty }]);
            cart.push(item);
        }
        alert(`Se sumaron ${qty} unidades de  ${item.name}`);

    }

    const removeItem = (item) => {
        console.log("Remove item requested");
        //if (cart.includes(item)){
        cart.pop(item);
        alert(`Item ${item.name} eliminado del carrito`);
        //}
    }

    const removeAll = () => {
        cart.clear();
        alert('Carrito eliminado!');

    }

    const isInCart = (itemId) => {
        return cartList.find((cartItem) => cartItem.id === itemId);
    }
    return (
        <CartContext.Provider value={{ cartList, setCartList, addToCart, removeItem, removeAll, isInCart, cart, badge, setBadge }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;
