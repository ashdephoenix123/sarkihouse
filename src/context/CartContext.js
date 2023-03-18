import { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "../usereducer/CartReducer";

const CartContext = createContext();

const initialState = {
    cartItems: [],
    totalItem: 0,
    shippingFee: 5000,
    cartTotal: 0,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, product, quantity) => {
        dispatch({type: "ADD_TO_CART", payload: {id, color, product, quantity}})
    }
    return <CartContext.Provider value={{...state, addToCart}}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext }