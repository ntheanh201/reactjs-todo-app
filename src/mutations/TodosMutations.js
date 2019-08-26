import gql from 'graphql-tag'

export const ADD_TODO = gql`
  mutation($input: TodoInput) {
    addTodo(input: $input) {
      id
      isDone
      name
    }
  }
`

export const UPDATE_TODO = gql`
  mutation($input: TodoInput) {
    updateTodo(input: $input) {
      id
      isDone
      name
    }
  }
`

export const TOGGLE_ALL_TODOS = gql`
  mutation($toggleStatus: Boolean!) {
    toggleAllTodos(toggleStatus: $toggleStatus) {
      id
      isDone
      name
    }
  }
`

export const CLEAR_COMPLETED_TODOS = gql`
  mutation($completed: String!) {
    clearCompletedTodos(completed: $completed) {
      id
      isDone
      name
    }
  }
`
