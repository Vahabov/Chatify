import { combineReducers } from 'redux';
import { reducer as firebase } from 'react-redux-firebase';
import channelReducer from './reducers/Channel';

const RootReducer = combineReducers({
    firebase,
    channels: channelReducer
})

export default RootReducer