const cartReducer = (state = {
    totals: 0,
    listProduct: []
}, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state = {
                ...state,
                totals: state.totals + action.payload.price,
                listProduct: [...state.listProduct, action.payload.product]
            };
            break;

        case "REMOVE_ITEM":
            state = {
                totals: state.totals - action.payload.price,
                listProduct: [...state.listProduct, action.payload.product]
            }
            break;

        default:
            break;

    }
    return state;
};

export default cartReducer;