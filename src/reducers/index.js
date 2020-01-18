const reducer = (state, action) => {
    switch (key) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
    
        default:
            return state;
    }
};

export default reducer;