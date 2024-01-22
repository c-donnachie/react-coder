import { createContext, useState } from "react";

export const CartOpenContext = createContext();

export const CartOpenProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);

    const handleOpenCart = () => {
        setCartOpen(true)
    }

    const handleCloseCart = () => {
        setCartOpen(false);
    }

    return (
        <CartOpenContext.Provider value={{ handleOpenCart, handleCloseCart, cartOpen }}>
            {children}
        </CartOpenContext.Provider>
    )
}
