import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../usereducer/CartReducer";

const CartContext = createContext();

const getCartProducts = () => {
    let cartData = localStorage.getItem("cartProducts")
    if(!cartData){
        return [];
    } else {
        return JSON.parse(cartData)
    }
}

const initialState = {
    cartItems: getCartProducts(),
    totalItem: 0,
    shippingFee: 5000,
    cartTotal: 0,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, product, quantity) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, product, quantity } })
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_CART_ITEM", payload: id})
    }

    const clearCart = ()=> {
        dispatch({type: "CLEAR_CART"})
    }

    const setDecrease = (id) => {
        dispatch({type: "SET_DECREASE", payload: id})
    }

    const setIncrease = (id) => {
        dispatch({type: "SET_INCREASE", payload: id})
    }

    useEffect(()=> {
        dispatch({type: "UPDATE_CART_TOTAL_PRODUCTS"})
        localStorage.setItem("cartProducts", JSON.stringify(state.cartItems))
    }, [state.cartItems])


    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext }