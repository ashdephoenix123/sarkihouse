const productReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_DATA": return ({
            ...state,
            isLoading: true
        });

        case "SET_API_DATA":
            const featuredProducts = action.payload.filter((item) => {
                return item.featured === true;
            });

            return ({
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: featuredProducts
            });

        case "ADD_PRODUCT_DETAIL": return ({
            ...state,
            isLoading: false,
            singleProduct: action.payload
        })

        case "ERROR": return ({
            ...state,
            isLoading: false,
            isError: true
        })

        default: return state;
    }
}

export default productReducer