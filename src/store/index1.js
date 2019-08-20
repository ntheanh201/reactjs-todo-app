import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import { createLogger } from 'redux-logger';
import { enableBatching } from 'redux-batched-actions';
import { TodosReducer } from '../reducers/reducers';

import { catchErrors } from './middleware';

const loggerMiddleware = createLogger({
  collapsed: true
});

// const reducers = combineReducers({
//     TodosReducer
// })

const initialState = {
  todos: [
    {
      id: 0,
      isDone: false,
      name: 'tadz'
    }
  ],
  toggleStatus: false,
  filter: 'showAll'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const helperMiddlewares = [promiseMiddleware, thunkMiddleware];
const otherMiddlewares = [catchErrors];
const debugMiddlewares = [loggerMiddleware];

export const store = createStore(
  enableBatching(TodosReducer),
  composeEnhancers(
    applyMiddleware(
      ...helperMiddlewares,
      ...otherMiddlewares,
      ...debugMiddlewares
    )
  ),
  initialState
);
