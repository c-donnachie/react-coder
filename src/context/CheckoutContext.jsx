import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [checkoutState, setCheckoutState] = useState(1);

    const resetCheckoutState = () => {
        setCheckoutState(1);
    }

    return (
        <CheckoutContext.Provider value={{ checkoutState, setCheckoutState, resetCheckoutState }}>
            {children}
        </CheckoutContext.Provider>
    )
}