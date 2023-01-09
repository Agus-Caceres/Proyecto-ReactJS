import React from "react";
import { createContext } from "react";

export const CartContext = createContext()
const saludar =() => {
    alert("Hola Coders");
}

const CartContextProvider = ({children}) => {
    return(
        <CartContext.Provider value={{saludar}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider