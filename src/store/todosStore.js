import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import { createLogger } from 'redux-logger';
import { enableBatching } from 'redux-batched-actions';
import todosReducer from '../reducers/todosReducer';

import { catchErrors } from './middleware';

const loggerMiddleware = createLogger({
  collapsed: true
});

const reducers = combineReducers({
  todosReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const helperMiddlewares = [promiseMiddleware, thunkMiddleware];
const otherMiddlewares = [catchErrors];
const debugMiddlewares = [loggerMiddleware];

export const store = createStore(
  enableBatching(reducers),
  composeEnhancers(
    applyMiddleware(
      ...helperMiddlewares,
      ...otherMiddlewares,
      ...debugMiddlewares
    )
  )
);
