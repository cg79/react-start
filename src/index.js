import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Boot from './routes/boot.component';
import MainPage from './routes/main-page.component';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import userReducer from './components/user/reducer/user-reducer';
import UserEditContainer from './components/user/user-edit/user-edit.container';

const logger = store => next => (action) => {
	console.log('action fired', action);
	next(action);
};

const middleware = applyMiddleware(thunk, logger);

const reducers = combineReducers({
	userReducer
});

const store = createStore(reducers, middleware);

ReactDOM.render(
	(
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Boot} />
					<Route path="/home" component={MainPage} />
					<Route path="/users/:userId" component={UserEditContainer} />
				</div>
			</BrowserRouter>
		</Provider>
	), document.getElementById('root')
);
registerServiceWorker();
