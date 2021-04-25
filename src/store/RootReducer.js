import { combineReducers } from 'redux';
import { reducer as firebase } from 'react-redux-firebase';
// import AuthReducer from './reducers/Auth';

const RootReducer = combineReducers({
    firebase,
    // auth: AuthReducer
})

export default RootReducer