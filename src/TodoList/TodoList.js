import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Title from '../Ui/components/Title';
import ActionBar from './components/ActionBar';
import Todos from './components/Todos';
import InputBar from './components/InputBar';

import { GET_TODOS } from '../queries/TodosQuery';
import {
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_ALL_TODOS,
  CLEAR_COMPLETED_TODOS
} from '../mutations/TodosMutations';

const TodoList = () => {
  const [filter, setFilter] = useState('showAll');
  const toggleFilter = filter => {
    setFilter(filter);
  };

  const { data = { todos: [] }, refetch } = useQuery(GET_TODOS, {
    variables: {
      filter
    }
  });

  const [addTodoMutation] = useMutation(ADD_TODO);
  const addTodo = async ({ id, isDone, name }) => {
    await addTodoMutation({
      variables: {
        input: {
          id,
          isDone,
          name
        }
      }
    });
    refetch();
  };

  const [updateTodoMutation] = useMutation(UPDATE_TODO);
  const updateTodo = async ({ id, isDone, name }) => {
    await updateTodoMutation({
      variables: {
        input: {
          id,
          isDone,
          name
        }
      }
    });
  };

  const [toggleAllTodosMutation] = useMutation(TOGGLE_ALL_TODOS);
  const toggleAllTodos = toggleStatus => {
    toggleAllTodosMutation({
      variables: {
        toggleStatus: !toggleStatus
      }
    });
  };

  const [clearCompletedTodosMutation] = useMutation(CLEAR_COMPLETED_TODOS);
  const clearCompletedTodos = () => {
    clearCompletedTodosMutation({
      variables: {
        completed: ''
      }
    });
    refetch();
  };

  const has = Object.prototype.hasOwnProperty;

  return (
    <Fragment>
      <Title>todos</Title>
      <Wrapper>
        <InputBar addTodo={addTodo} toggleAllTodos={toggleAllTodos} />
        <Todos todos={data.todos || []} updateTodo={updateTodo} />
        <ActionBar
          clearCompletedTodos={clearCompletedTodos}
          count={has.call(data, 'todos') ? data.todos.length : 0}
          filter={filter}
          toggleFilter={toggleFilter}
        />
      </Wrapper>
    </Fragment>
  );
};

export default TodoList;

const Wrapper = styled.section`
  background: #fff;
  margin: 60px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;
