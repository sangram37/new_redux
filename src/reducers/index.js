import { combineReducers } from 'redux';

import HomeReducer from './HomeReducer';

import foodreducers from './foodreducers';

export default combineReducers({
    homelist:HomeReducer,
    food : foodreducers,
 
});