import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import reducer from '../usereducer/productReducer'

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    gridView: true,
    featuredProducts: [],
    singleProduct: {}
}

const API = 'https://api.pujakaitem.com/api/products'

const AppProvider = ({ children }) => {

    const navigate = useNavigate();

    const [progress, setProgress] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialState); 

    const getProducts = async (url) => {
        dispatch({ type: "LOAD_DATA" })
        try {
            const res = await axios.get(url);
            const data = await res.data;
            dispatch({ type: "SET_API_DATA", payload: data })
        } catch (error) {
            dispatch({ type: "ERROR" })
        }
    }
    
    const getSingleProductDetails = async (url) => {
        dispatch({ type: "LOAD_DATA" })
        try {
            setProgress(30)
            const res = await axios.get(url);
            setProgress(40)
            const productDetail = await res.data;
            setProgress(70)
            dispatch({ type: "ADD_PRODUCT_DETAIL", payload: productDetail })
            setProgress(100)
        } catch (error) {
            dispatch({ type: "ERROR" })
            setProgress(100)
            navigate("pagenotfound")
        }
    }

    useEffect(() => {
        getProducts(API)
    }, [])

    return <AppContext.Provider value={{...state, dispatch ,getSingleProductDetails, API, setProgress, progress}}>
        {children}
    </AppContext.Provider>
}

const useFeaturedData = () => {
    return useContext(AppContext)
}




export { AppProvider, useFeaturedData };

