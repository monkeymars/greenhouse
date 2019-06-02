export function saveCredential (token, email) {
    return {
        type: "SAVE_CREDENTIAL",
        payload: {
            token: token,
            email: email
        }
    }
}

export function placeOrder (cart) {
    return {
        type: "PLACE_ORDER",
        payload: {
            order: cart
        }
    }
}

export function logout () {
    return {
        type: "LOGOUT",
        payload: {}
    }
}