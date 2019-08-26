import { gql } from 'apollo-boost'

export const GET_ALL_TODOS = gql`
  query {
    getAllTodos {
      id
      isDone
      name
    }
  }
`

export const GET_TODOS = gql`
  query($filter: String!) {
    todos(filter: $filter) {
      id
      isDone
      name
    }
  }
`
