const reducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET-VOTES':
            state[action.data.key] = action.data.value
            return state;
        default:
            return state;
    }
};

export default reducer;
