const myPodReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_POD':
            return action.payload;
        default:
            return state;
    }
};

export default myPodReducer;