import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import RootReducer from './RootReducer';


export const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(Thunk))
)


