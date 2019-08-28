import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { TodoListContext } from 'context'

import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_ALL_TODOS,
  CLEAR_COMPLETED_TODOS
} from 'services/TodoService'

import Component from './TodoList'

export const TodoListContainer = restProps => {
  const [filter, setFilter] = useState('showAll')

  const { data: { todos = [] } = {}, refetch } = useQuery(GET_TODOS, {
    variables: {
      filter
    }
  })

  const [addTodoMutation] = useMutation(ADD_TODO)
  const [updateTodoMutation] = useMutation(UPDATE_TODO)
  const [toggleAllTodosMutation] = useMutation(TOGGLE_ALL_TODOS)
  const [clearCompletedTodosMutation] = useMutation(CLEAR_COMPLETED_TODOS)

  const addTodo = async ({ id, isDone, name }) => {
    await addTodoMutation({
      variables: {
        input: {
          id,
          isDone,
          name
        }
      }
    })
    refetch()
  }

  const updateTodo = async ({ id, isDone, name }) => {
    await updateTodoMutation({
      variables: {
        input: {
          id,
          isDone,
          name
        }
      }
    })
  }

  const toggleAllTodos = toggleStatus => {
    toggleAllTodosMutation({
      variables: {
        toggleStatus: !toggleStatus
      }
    })
  }

  const clearCompletedTodos = () => {
    clearCompletedTodosMutation({
      variables: {
        completed: ''
      }
    })
    refetch()
  }

  const props = {
    todos,
    count: todos.length,
    addTodo,
    updateTodo,
    toggleAllTodos,
    clearCompletedTodos,
    setFilter,
    filter
  }

  return (
    <TodoListContext.Provider value={props}>
      <Component {...restProps} />
    </TodoListContext.Provider>
  )
}

export default TodoListContainer
