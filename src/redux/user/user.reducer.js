// the first reducer  



const INITIAL_STATE = {
    currentUser:null
}

const useReducer = ( state = INITIAL_STATE , action ) => {
    switch(action.type){ 
        // the case of that action.type , we spread the state and the value is hold by => payload
        case 'SET_CURRENT_USER': return {...state , currentUser: action.payload}

        // otherwise by default return the state
        default:
            return state;
    }
}

export default useReducer;