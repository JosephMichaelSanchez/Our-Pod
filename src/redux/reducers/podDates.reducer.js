const podDatesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DATES':
            return action.payload;
        case 'RESET_ALL':
            return [];
        default:
            return state;
    }
};

export default podDatesReducer;