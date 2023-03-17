import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import reducer from '../usereducer/productReducer'

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    filterProducts: [],
    gridView: true,
    featuredProducts: [],
    singleProduct: {},
    searchFilter: {
        searchText: "",
        company: "all",
        category: "all",
        colors: "all",
        price: 0,
        maxprice: 0,
        minprice: 0
    },
    sortingtype: "recommended"
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

    const sorting = (e) => {
        const value = e.target.value;
        dispatch({type: "SORT_TYPE", payload: value})
    }

    const searchSort = (e) => {
        const {name, value} = e.target;
        dispatch({type: "CHANGE_SEARCH_TEXT", payload: {name, value}})
    }

    const clearFilter = () => {
        dispatch({type: "CLEAR_FILTER"})
    }

    useEffect(()=> {
        dispatch({type: "FILTER_PRODUCTS_SEARCH"})
        dispatch({type: "SORTING_PRODUCTS"})
    }, [state.sortingtype, state.searchFilter])

    useEffect(() => {
        getProducts(API)
    }, [])

    return <AppContext.Provider value={{...state,clearFilter, dispatch ,getSingleProductDetails, API, setProgress, progress, sorting, searchSort}}>
        {children}
    </AppContext.Provider>
}

const useFeaturedData = () => {
    return useContext(AppContext)
}




export { AppProvider, useFeaturedData };

