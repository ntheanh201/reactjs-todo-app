import { createStore } from 'redux';
import uuid from "uuid";
import reducer from '../reducers/reducers';

const todos = [{
    id: uuid(),
    isDone: false,
    name: "Todo Item 1"
}, {
    id: uuid(),
    isDone: false,
    name: "Todo Item 2"
}]

const initialState = {
    todos,
    toggleStatus: false,
    filter: "showAll",
}

export default createStore(reducer, initialState)