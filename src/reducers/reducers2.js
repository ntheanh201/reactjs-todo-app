import { handleActions } from 'redux-actions'
import {
    getAllTodos,
    addTodo,
    // toggleAllTodo,
    // updateTodo,
    // setFilter,
    // clearCompletedTodo
} from '../actions/actionTypes2'

//state la state hien tai, action co the coi la state moi
//const theme = {
// primaryColor: "#ffffff"
// }
/* <Theme theme={theme}></Theme> */

const defaultState = {
    todos: [{ id: 0, isDone: false, name: 'anh' }],
    toggleStatus: false,
    filter: 'showAll'
}

// const handleGetAllTodos = (state, action) => {
//     const todos = action.payload.todos
//     console.log(action)
//     const { toggleStatus, filter } = action.payload
//     return {
//         todos,
//         toggleStatus,
//         filter
//     }
// }

const handleAddTodo = (state, action) => {
    console.log(action.payload.todos)
    return {
        // todos: [...state.todos, { id, isDone, name }]
    }
}

// const handleToggleAllTodo = (state, action) => {
//     // const { todos, toggleStatus, filter } = state
//     // return {
//     //     todos: todos.map(({ id, name }) => ({
//     //         id,
//     //         isDone: !state.toggleStatus,
//     //         name
//     //     })),
//     //     toggleStatus: !toggleStatus,
//     //     filter,
//     // }
// }

// const handleSetFilter = (state, action) => {
//     // const { todos, toggleStatus, filter } = action.payload
//     // return {
//     //     todos,
//     //     toggleStatus,
//     //     filter: action.filter,
//     // }
// }

// const handleUpdateTodo = (state, action) => {
//     // const { todos, toggleStatus, filter } = state
//     // let todo = action.todo
//     // let updateTodos = [...todos]
//     // const index = updateTodos.map(todo => todo.id).indexOf(todo.id);
//     // updateTodos[index] = action.todo;
//     // return {
//     //     todos: updateTodos,
//     //     toggleStatus,
//     //     filter,
//     // }
// }

// const handleClearCompletedTodo = (state, action) => {
//     // const { todos, toggleStatus, filter } = state
//     // return {
//     //     todos: todos.filter(({ isDone }) => !isDone),
//     //     toggleStatus,
//     //     filter,
//     // }
// }

export const TodosReducer = handleActions({
    // [getAllTodos]: handleGetAllTodos,
    [addTodo]: (state, action) => {
        console.log("fjeffij")
        return ({
        counter: state.counter + action.payload
      })},
    // [toggleAllTodo]: handleToggleAllTodo,
    // [setFilter]: handleSetFilter,
    // [updateTodo]: handleUpdateTodo,
    // [clearCompletedTodo]: handleClearCompletedTodo
    [getAllTodos]: (state, action) => {
        console.log("fjeffij")
        return ({
        counter: state.counter + action.payload
      })}
}, defaultState)