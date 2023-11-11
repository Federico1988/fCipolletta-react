import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

    //const cart = [];
    const [cart, setCart] = useState([]);
    const [badge, setBadge] = useState([0]);
    /* useEffect(() => {
         console.log(cart);
     }, [cart]);*/

    const addToCart = (item, qty) => {
        if (qty === 0) return;

        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, cantidad: cartItem.cantidad + qty }
                        : cartItem
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...item, cantidad: qty }]);
        }

        setBadge((prevBadge) => prevBadge + qty);
        //alert(`Se sumaron ${qty} unidades de  ${item.name}`);

    }

    const removeItem = (item) => {
        console.log("Remove item requested");
        //if (cart.includes(item)){
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
        alert(`Item ${item.name} eliminado del carrito`);
        //}
    }

    const removeAll = () => {
        setCart([]);
        setBadge(0);

    }

    const isInCart = (itemId) => {
        return cart.find((cartItem) => cartItem.id === itemId);
    }
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeItem, removeAll, isInCart, cart, badge, setBadge }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;
