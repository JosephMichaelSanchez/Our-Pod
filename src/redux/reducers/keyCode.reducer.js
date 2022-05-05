const keyCodeReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_KEYCODE':
            return action.payload;
        case 'CLEAR_KEYCODE':
            return ''; 
        case 'RESET_ALL':
            return '';       
        default:
            return state;
    }
}

export default keyCodeReducer;