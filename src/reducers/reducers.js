// import {
//   ADD_TODO,
//   GET_ALL_TODOS,
//   TOGGLE_ALL_TODOS,
//   UPDATE_TODO,
//   SET_FILTER,
//   CLEAR_COMPLETED_TODO
// } from '../actions/actionTypes';

// const todosReducer = (state = [], action) => {
//   const { todos, toggleStatus, filter } = state;
//   switch (action.type) {
//     case GET_ALL_TODOS: {
//       return {
//         todos: action.payload,
//         toggleStatus,
//         filter
//       };
//     }
//     case ADD_TODO: {
//       const { id, isDone, name } = action.payload;
//       return {
//         todos: [...state.todos, { id, isDone, name }],
//         toggleStatus,
//         filter
//       };
//     }
//     case TOGGLE_ALL_TODOS: {
//       const { toggleStatus } = action.payload;
//       return {
//         todos: todos.map(({ id, name }) => ({
//           id,
//           isDone: toggleStatus,
//           name
//         })),
//         toggleStatus,
//         filter: state.filter
//       };
//     }
//     case UPDATE_TODO: {
//       let todo = action.payload.todo;
//       let updateTodos = [...todos];
//       const index = updateTodos.map(todo => todo.id).indexOf(todo.id);
//       updateTodos[index] = action.payload.todo;
//       return {
//         todos: updateTodos,
//         toggleStatus,
//         filter
//       };
//     }
//     case SET_FILTER: {
//       return {
//         todos,
//         toggleStatus,
//         filter: action.payload.filter
//       };
//     }
//     case CLEAR_COMPLETED_TODO: {
//       return {
//         todos: todos.filter(({ isDone }) => !isDone),
//         toggleStatus,
//         filter
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default todosReducer;
