const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, color, product, quantity } = action.payload;

            let availableData = state.cartItems.find((item) => {
                return item.id === id + color;
            })

            if (availableData) {
                let updateData = state.cartItems.map((item) => {
                    if (item.id === id + color) {
                        let newQuantity = item.quantity + quantity;
                        if (newQuantity >= item.max) {
                            newQuantity = item.max
                        }
                        return {
                            ...item,
                            quantity: newQuantity
                        }
                    } else {
                        return item
                    }
                })

                return {
                    ...state,
                    cartItems: updateData
                }

            } else {
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
            }


        case "REMOVE_CART_ITEM":
            let prodId = action.payload;
            let updateCartItem = [...state.cartItems]
            updateCartItem = updateCartItem.filter((item) => {
                return item.id !== prodId
            })

            return {
                ...state,
                cartItems: [...updateCartItem]
            }

        case "CLEAR_CART": return {
            ...state,
            cartItems: []
        }


        default: return state
    }
}

export default reducer;