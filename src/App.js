import React, { Component, Fragment } from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Footer from "./Layouts/Footer";
import TodosListContainer from "./TodoList/TodosListContainer";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <ApolloProvider client={client}>
          <TodosListContainer />
        </ApolloProvider>
        <Footer />
      </Fragment>
    );
  }
}


export default App
