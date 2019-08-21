import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_ALL_TODOS = gql`
  query($filter: String!) {
    todos(filter: $filter) {
      id
      isDone
      name
    }
  }
`;

const GET_TOGGLE_STATUS = gql`
  query {
    toggleStatus
  }
`;

export const GetAllTodos = ({ filter, children }) => (
  <Query
    query={GET_ALL_TODOS}
    variables={{ filter }}
    fetchPolicy="network-only"
  >
    {({ loading, error, data = {}, refetch }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;
      {
        /* console.log(data) */
      }
      return children(data, refetch);
    }}
  </Query>
);

export const getToggleStatus = () => (
  <Query query={GET_TOGGLE_STATUS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;
      console.log(data);
      return;
    }}
  </Query>
);
