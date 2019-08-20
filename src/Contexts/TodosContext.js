import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TodosContext = createContext({
  todos: [],
  filteredTodos: [],
  filter: false,
  createTodo: () => {},
  updateTodo: () => {},
  toggleFilter: () => {},
  filterTodos: () => {},
  clearCompletedTodo: () => {},
  toggleAllTodo: () => {},
  getUndoneTodo: () => {},
})

export const todoFilters = [
  {
    name: 'showAll',
    filterTodos: todos => todos,
  },
  {
    name: 'showActive',
    filterTodos: todos => todos.filter(({ isDone }) => !isDone),
  },
  {
    name: 'showCompleted',
    filterTodos: todos => todos.filter(({ isDone }) => isDone),
  },
]

const initialTodos = [
  {
    id: 0,
    isDone: false,
    name: 'TodoItem 1',
  },
  {
    id: 1,
    isDone: true,
    name: 'TodoItem 2',
  },
]

const TodosContainer = props => {
  const [todos, setTodos] = useState(initialTodos)
  const [filteredTodos, setFilteredTodos] = useState(initialTodos)
  const [filter, setFilter] = useState(todoFilters[0])
  const [toggleStatus, setToggleStatus] = useState(false)

  useEffect(() => {
    setFilteredTodos(filter.filterTodos(todos))
  })

  const createTodo = name => {
    const newTodos = [...todos, { id: uuid(), isDone: false, name }]
    setTodos(newTodos)
  }

  const updateTodo = todo => {
    let updateTodos = [...todos]
    const index = updateTodos.map(todo => todo.id).indexOf(todo.id)
    updateTodos[index] = todo
    setTodos(updateTodos)
  }

  const toggleFilter = index => {
    const currentFilter = todoFilters[index]
    setFilter(currentFilter)
  }

  const clearCompletedTodo = () => {
    setTodos(todos.filter(({ isDone }) => !isDone))
  }

  const toggleAllTodo = () => {
    setTodos(
      todos.map(({ id, name }) => ({
        id,
        isDone: !toggleStatus,
        name,
      }))
    )
    setToggleStatus(!toggleStatus)
  }

  const getUndoneTodo = () => {
    return filteredTodos.filter(({ isDone }) => !isDone).length
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        createTodo,
        updateTodo,
        filteredTodos,
        filter,
        toggleFilter,
        clearCompletedTodo,
        toggleAllTodo,
        getUndoneTodo,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}
export default TodosContainer
