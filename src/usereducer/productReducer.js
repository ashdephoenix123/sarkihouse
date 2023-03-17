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

            let priceArr = action.payload.map((item) => {
                return item.price;
            })
            priceArr = new Set([...priceArr])
            const maxp = Math.max(...priceArr)

            return ({
                ...state,
                isLoading: false,
                products: action.payload,
                filterProducts: action.payload,
                featuredProducts: featuredProducts,
                searchFilter: { ...state.searchFilter, maxprice: maxp, price: maxp }
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

            return ({
                ...state,
                sortingtype: action.payload
            })

        case "SORTING_PRODUCTS":
            let filter;
            const { sortingtype, filterProducts } = state;
            let tempfilter = [...filterProducts];

            const letsSortIt = (a, b) => {
                switch (sortingtype) {
                    case "atoz":
                        return a.name.localeCompare(b.name)

                    case "ztoa":
                        return b.name.localeCompare(a.name)

                    case "lowest":
                        return a.price - b.price

                    case "highest":
                        return b.price - a.price
                    default: return a.id.localeCompare(b.id)

                }
            }

            filter = tempfilter.sort(letsSortIt);

            return ({
                ...state,
                filterProducts: filter
            })

        case "CHANGE_SEARCH_TEXT":
            const { name, value } = action.payload;

            return ({
                ...state,
                searchFilter: {
                    ...state.searchFilter,
                    [name]: value
                }
            })

        case "FILTER_PRODUCTS_SEARCH":

            const { searchFilter: { searchText, category, company, colors, price } } = state;
            let tempProducts = [...state.products];

            if (searchText) {
                tempProducts = tempProducts.filter((item) => {
                    return item.name.toLowerCase().includes(searchText)
                })
            } else if (category !== "all") {
                tempProducts = tempProducts.filter((item) => {
                    return item.category === category
                })
            } else if (company !== "all") {
                tempProducts = tempProducts.filter((item) => {
                    return item.company === company
                })
            } else if (colors !== "all") {
                tempProducts = tempProducts.filter((item) => {
                    return item.colors.includes(colors)
                })
            } else if (price) {
                if (price === 0) {
                    tempProducts = tempProducts.filter((item) => {
                        return item.price <= maxp
                    })
                } else {
                    tempProducts = tempProducts.filter((item) => {
                        return item.price <= price
                    })
                }
            }

            return {
                ...state,
                filterProducts: tempProducts
            }

        case "CLEAR_FILTER":

            return ({
                ...state,
                searchFilter: {
                    ...state.searchFilter,
                    searchText: "",
                    company: "all",
                    category: "all",
                    colors: "all",
                    price: state.searchFilter.maxprice,
                    maxprice: state.searchFilter.maxprice,
                    minprice: 0
                }
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