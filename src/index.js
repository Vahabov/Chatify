import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
import firebase from './firebase';
import { store } from './store/store';

const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

const Root = () => (
  <Switch>
    <Route exact path='/' component={App} />
    <Route path='/signup' component={SignUp} />
    <Route path='/login' component={Login} />
  </Switch>
)


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Root />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


