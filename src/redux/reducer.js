const initialState = {
    customerId: null,
    otherValue: 'was good'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTH':
            return {
                ...state,
                customerId: action.payload
            };

        case "LOGOUT":
            return {
                ...state,
                customerId: null
            };
        default:
            return state;
    }
}

export default reducer