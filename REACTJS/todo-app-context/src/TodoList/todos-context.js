import React from 'react'

export default React.createContext({
    todos: [],
    filteredTodos: [],
    createTodo: () => {},
    updateTodo: () => {},
    filter: false,
    toggleFilter: () => {},
    filterTodos: () => {},
    clearCompletedTodo: () => {},
    toggleAllTodo: () => {},
    getUndoneTodo: () => {},
})