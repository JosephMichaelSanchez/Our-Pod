const podInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POD_INFO':
            return action.payload[0];
        case 'RESET_ALL':
            return [];
        default:
            return state;    
    }
}

export default podInfoReducer;