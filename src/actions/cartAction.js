export function addCart (product) {
    return {
        type: "ADD_ITEM",
        payload: {
            price: product.price,
            product: product
        }
    }
}

export function removeCart (product) {
    return {
        type: "REMOVE_ITEM",
        payload: product
    }
}