import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { TodoListContext } from '@context'

import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_ALL_TODOS,
  CLEAR_COMPLETED_TODOS
} from '@services/TodoService'

import Component from './TodoList'

export const TodoListContainer = restprops => {
  const [filter, setFilter] = useState('showAll')

  const { data: { todos = [] } = {}, refetch } = useQuery(GET_TODOS, {
    variables: {
      filter
    }
  })

  const [
    addTodoMutation,
    updateTodoMutation,
    toggleAllTodosMutation,
    clearCompletedTodosMutation
  ] = useMutation(
    ADD_TODO,
    UPDATE_TODO,
    TOGGLE_ALL_TODOS,
    CLEAR_COMPLETED_TODOS
  )

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
      <Component {...restprops} />
    </TodoListContext.Provider>
  )
}

export default TodoListContainer
