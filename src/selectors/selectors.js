import { createSelector } from 'reselect';

// const getTodos = state => state.todos;
// const getFilter = state => state.filter;

const getTodos = state =>
  !state.hasOwnProperty('todosReducer') ? state.todos : [];

const getFilter = state =>
  !state.hasOwnProperty('todosReducer') ? state.filter : [];

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case 'showAll':
        return todos;
      case 'showCompleted':
        return todos.filter(t => t.isDone);
      case 'showActive':
        return todos.filter(t => !t.isDone);
    }
  }
);

export const getUndoneTodosCount = createSelector(
  [getTodos, getVisibleTodos],
  todos => {
    return todos.filter(({ isDone }) => !isDone).length;
  }
);
