export function addCart (product) {
    return {
        type: "ADD_ITEM",
        payload: {
            price: product.price,
            product: product
        }
    }
}

export function removeCart (product, index) {
    return {
        type: "REMOVE_ITEM",
        payload: {
            index: index,
            price: product.price,
            product: product
        }
    }
}

export function clearCart () {
    return {
        type: "CLEAR_CART",
        payload: {}
    }
}