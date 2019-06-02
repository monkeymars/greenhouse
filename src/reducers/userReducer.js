const userReducer = (state = {
    order: [],
    isLoggedIn: false,
    email: ""
}, action) => {
    switch (action.type) {
        case "SAVE_CREDENTIAL":
            state = {
                ...state,
                isLoggedIn: action.payload.token ? true : false,
                email: action.payload.email
            };
            break;

        case "PLACE_ORDER":
            state = {
                ...state,
                order: [...state.order, action.payload.order]
            }
            break;

        case "LOGOUT":
            state = {
                ...state,
                isLoggedIn: false,
                email: null
            }
            break;

        default:
            break;

    }
    return state;
};

export default userReducer;