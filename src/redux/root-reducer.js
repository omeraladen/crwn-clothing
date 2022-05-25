import { combineReducer } from 'redux';

import useReducer from './user/user.reducer';

export default combineReducer ({
    user: useReducer
});