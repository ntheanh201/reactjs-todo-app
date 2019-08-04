
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TodosReducer from '../reducers/reducers';

const initialState = {
    todos: [],
    toggleStatus: false,
    filter: "showAll",
}

export const store = createStore(TodosReducer, initialState, applyMiddleware(thunk))