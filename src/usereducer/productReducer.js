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
                filterProducts: action.payload,
                featuredProducts: featuredProducts
            });

        case "ADD_PRODUCT_DETAIL": return ({
            ...state,
            isLoading: false,
            singleProduct: action.payload
        })

        case "CHANGELAYOUTTYPE": return ({
            ...state,
            gridView: action.payload
        })

        case "SORT_TYPE":
            let sorting = document.getElementById('sorting')
            let sortvalue = sorting.options[sorting.selectedIndex].value;

            return ({
                ...state,
                sortingtype: sortvalue
            })

        case "SORTING_PRODUCTS":
            let filter;
            let tempfilter = [...action.payload];

            switch (state.sortingtype) {
                case "recommended":
                    filter = tempfilter;
                    break;

                case "atoz":
                    filter = tempfilter.sort((a, b) => {
                        return a.name.localeCompare(b.name)
                    })
                    break;

                case "ztoa":
                    filter = tempfilter.sort((a, b) => {
                        return b.name.localeCompare(a.name)
                    })
                    break;

                case "lowest":
                    filter = tempfilter.sort((a, b) => {
                        return a.price - b.price
                    })
                    break;

                case "highest":
                    filter = tempfilter.sort((a, b) => {
                        return b.price - a.price
                    })
                    break;

            }

            return ({
                ...state,
                filterProducts: filter
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