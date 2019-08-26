import React, { Fragment } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Footer } from '@layouts'
import TodoList from './TodoList'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})

const App = () => {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <TodoList />
      </ApolloProvider>
      <Footer />
    </Fragment>
  )
}

export default App
