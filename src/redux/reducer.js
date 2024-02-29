const initialState = {
    adminId: null,
    otherValue: 'was good'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_AUTH':
            return {
                ...state,
                admminId: action.payload
            };

        case "LOGOUT":
            return {
                ...state,
                adminId: null
            };
        default:
            return state;
    }
}

export default reducer