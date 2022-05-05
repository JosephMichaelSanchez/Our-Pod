const myPodReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_POD':
            return action.payload;
        case 'RESET_ALL':
            return [];
        default:
            return state;
    }
};

export default myPodReducer;