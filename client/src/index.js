import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import {Router,Route,indexRoute,browserHistory} from 'react-router';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="signin" component={Signin}/>	
			<Route path="signout" component={Signout}/>	
			<Route path="signup" component={Signup}/>	
		</Route>
	</Router>
  </Provider>
  , document.querySelector('.container'));
