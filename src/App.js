import React, { Fragment } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Footer from './Layouts/Footer';
import TodosList from './TodoList/TodoList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

const App = () => {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <TodosList />
      </ApolloProvider>
      <Footer />
    </Fragment>
  );
};

export default App;
