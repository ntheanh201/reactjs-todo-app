import axios from 'axios';
import { createAction } from 'redux-actions';
import uuid from 'uuid';

import { useFetch } from './hooks';
export const ADD_TODO = 'ADD_TODO';
export const GET_ALL_TODOS = 'GET_ALL_TODOS';
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_FILTER = 'SET_FILTER';
export const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODO';

const serverUrl = 'http://localhost:8123';

// const fetchTodo = res => {
//   return {
//     type: GET_ALL_TODOS,
//     payload: res.data
//   };
// };

// const fetchStart = () => {
//   return {
//     type: GET_ALL_TODOS,
//     payload: []
//   };
// };

// export const getAllTodos = () => {
//   return async dispatch => {
//     try {
//       dispatch(fetchStart());
//       let res = await axios.get(`${serverUrl}/todos`);
//       dispatch(fetchTodo(res));
//     } catch (error) {
//       dispatch(fetchStart());
//     }
//   };
// };

export const getAllTodos = createAction(GET_ALL_TODOS, () => {
  const [data] = useFetch(`${serverUrl}/todos`);
  return data;
});

export const addTodo = createAction(ADD_TODO, text => {
  const id = uuid();
  axios
    .post(`${serverUrl}/todos`, { name: text, id })
    .then(res => res.data)
    .catch(console.log);
  return {
    id,
    isDone: false,
    name: text
  };
});

export const toggleAllTodos = createAction(TOGGLE_ALL_TODOS, toggleStatus => {
  axios
    .put(`${serverUrl}/todos/toggleAll`, { toggleStatus })
    .then(res => res.data)
    .catch(console.log);
  return { toggleStatus: !toggleStatus };
});

export const updateTodo = createAction(UPDATE_TODO, todo => {
  // console.log(todo);
  axios
    .put(`${serverUrl}/todos/update/${todo.id}`, { todo })
    .then(res => res.data)
    .catch(console.log);
  return {
    todo
  };
});

export const setFilter = createAction(SET_FILTER, filter => {
  return { filter };
});

export const clearCompletedTodo = createAction(CLEAR_COMPLETED_TODO, () => {
  axios
    .delete(`${serverUrl}/todos/completed`)
    .then(res => res.data)
    .catch(console.log);
  return {};
});
