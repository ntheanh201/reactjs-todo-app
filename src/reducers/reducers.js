import {
    ADD_TODO,
    CLEAR_COMPLETED_TODO,
    SET_FILTER,
    TOGGLE_ALL_TODO,
    UPDATE_TODO
} from '../actions/actionTypes'

//state la state hien tai, action co the coi la state moi
//const theme = {
// primaryColor: "#ffffff"
// }
/* <Theme theme={theme}></Theme> */

export default function (state = [], action) {

    const { todos, toggleStatus, filter } = state
    switch (action.type) {
        case ADD_TODO: {
            const { id, isDone, name } = action.payload
            return {
                todos: [...state.todos, { id, isDone, name }],
                toggleStatus,
                filter,
            }
            
        }
        case TOGGLE_ALL_TODO: {
            return {
                todos: todos.map(({ id, name }) => ({
                    id,
                    isDone: !state.toggleStatus,
                    name
                })),
                toggleStatus: !toggleStatus,
                filter: state.filter,
            }
        }
        case SET_FILTER: {
            return {
                todos,
                toggleStatus,
                filter: action.filter,
            }
        }
        case UPDATE_TODO: {
            let todo = action.todo
            let updateTodos = [...todos]
            const index = updateTodos.map(todo => todo.id).indexOf(todo.id);
            updateTodos[index] = action.todo;
            return {
                todos: updateTodos,
                toggleStatus,
                filter,
            }
        }
        case CLEAR_COMPLETED_TODO: {
            return {
                todos: todos.filter(({ isDone }) => !isDone),
                toggleStatus,
                filter,
            }
        }
        default:
            return state
    }
}