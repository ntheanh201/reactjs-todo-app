import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { GET_TODOS } from '../queries/TodosQuery'
import {
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_ALL_TODOS,
  CLEAR_COMPLETED_TODOS
} from '../mutations/TodosMutations'
import Component from './TodoList'

export const TodoList = restprops => {
  const [filter, setFilter] = useState('showAll')

  const { data: { todos } = {}, refetch } = useQuery(GET_TODOS, {
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
    addTodo,
    updateTodo,
    toggleAllTodos,
    clearCompletedTodos,
    setFilter,
    filter
  }

  return <Component {...restprops} {...props} />
}
