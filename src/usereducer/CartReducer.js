const reducer = (state, action)=> {
    switch (action.type) {
        case "ADD_TO_CART":
            let {id, color, product, quantity} = action.payload;
            let cartProduct = {
                id: id + color,
                name: product.name,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
                quantity: quantity,
                color: color
            }

            return ({
                ...state,
                cartItems: [...state.cartItems, cartProduct]
            })
            
            
    
        default: return state
    }
}

export default reducer;