import uuid from "uuid";

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_ALL_TODO = 'TOGGLE_ALL_TODO'
export const SET_FILTER = 'SET_FILTER'
export const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODOS'

export const addTodo = (text) => ({
    type: ADD_TODO, payload: { id: uuid(), isDone: false, name: text }
})

export const toggleAllTodo = () => ({
    type: TOGGLE_ALL_TODO
})

export const updateTodo = (todo) => {
    
    return {
        type: UPDATE_TODO,
        todo
    }
}

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
})

export const clearCompletedTodo = () => ({
    type: CLEAR_COMPLETED_TODO
})