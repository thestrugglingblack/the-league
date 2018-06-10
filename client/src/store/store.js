import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { history } from '../utils/urlhistory';

import user from './user/reducers';

//Combine all reducers of application
const rootReducer = combineReducers({
  user,
  router
})

// Middlewares
const middlewares = [
  thunk,
  routerMiddleware(history),
];

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  // To aid development and debugging, if the developer has Redux DevTools, use that.
  // Otherwise, use the redux-logger middleware.
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      predicate: (getState, action) => action.type
    });
  } else {
    composeEnhancers = compose;
    // Noisy, but helpful
    middlewares.push(
      createLogger({
        level: 'info',
        collapsed: true,
        predicate: (getState, action) => action.type
      })
    );
  }
}

// Store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
