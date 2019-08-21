import { handleActions } from 'redux-actions';
import {
  GET_ALL_TODOS,
  ADD_TODO,
  TOGGLE_ALL_TODOS,
  UPDATE_TODO,
  SET_FILTER,
  CLEAR_COMPLETED_TODO
} from '../actions/actionTypes';

//state la state hien tai, action co the coi la state moi
//const theme = {
// primaryColor: "#ffffff"
// }
/* <Theme theme={theme}></Theme> */

const defaultState = {
  todos: [],
  toggleStatus: false,
  filter: 'showAll'
};

const handleGetAllTodos = (state, action) => {
  const { toggleStatus, filter } = state;
  return {
    todos: action.payload,
    toggleStatus,
    filter
  };
};

const handleAddTodo = (state, action) => {
  const { toggleStatus, filter } = state;
  const { id, isDone, name } = action.payload;
  return {
    todos: [...state.todos, { id, isDone, name }],
    toggleStatus,
    filter
  };
};

const handleToggleAllTodos = (state, action) => {
  const { todos, toggleStatus, filter } = state;
  return {
    todos: todos.map(({ id, name }) => ({
      id,
      isDone: !state.toggleStatus,
      name
    })),
    toggleStatus: !toggleStatus,
    filter
  };
};

const handleSetFilter = (state, action) => {
  const { todos, toggleStatus } = state;
  return {
    todos,
    toggleStatus,
    filter: action.payload.filter
  };
};

const handleUpdateTodo = (state, action) => {
  const { todos, toggleStatus, filter } = state;
  let todo = action.payload.todo;
  let updateTodos = [...todos];
  const index = updateTodos.map(todo => todo.id).indexOf(todo.id);
  updateTodos[index] = action.payload.todo;
  return {
    todos: updateTodos,
    toggleStatus,
    filter
  };
};

const handleClearCompletedTodo = (state, action) => {
  const { todos, toggleStatus, filter } = state;
  return {
    todos: todos.filter(({ isDone }) => !isDone),
    toggleStatus,
    filter
  };
};

const todosReducer = handleActions(
  {
    [GET_ALL_TODOS]: handleGetAllTodos,
    [ADD_TODO]: handleAddTodo,
    [TOGGLE_ALL_TODOS]: handleToggleAllTodos,
    [SET_FILTER]: handleSetFilter,
    [UPDATE_TODO]: handleUpdateTodo,
    [CLEAR_COMPLETED_TODO]: handleClearCompletedTodo
  },
  defaultState
);

export default todosReducer;
