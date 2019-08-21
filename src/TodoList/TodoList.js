import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Title from '../Ui/components/Title';
import ActionBar from './components/ActionBar';
import { GetAllTodos } from '../queries/TodosQuery';
import {
  AddTodo,
  UpdateTodo,
  ToggleAllTodos,
  ClearCompletedTodos
} from '../mutations/TodosMutations';
import Todos from './components/Todos';

const TodoList = () => {
  const [filter, setFilter] = useState('showAll');
  const toggleFilter = filter => {
    setFilter(filter);
  };

  return (
    <Fragment>
      <Title>todos</Title>
      <Wrapper>
        <GetAllTodos filter={filter}>
          {(data, refetch) => {
            const { todos } = data;
            return (
              <Fragment>
                <ToggleAllTodos>
                  {toggleAllTodos => (
                    <AddTodo
                      refetch={refetch}
                      toggleAllTodos={toggleAllTodos}
                    />
                  )}
                </ToggleAllTodos>
                <UpdateTodo>
                  {updateTodo => (
                    <Todos
                      todos={todos}
                      refetch={refetch}
                      updateTodo={updateTodo}
                    />
                  )}
                </UpdateTodo>
                <ClearCompletedTodos>
                  {clearCompletedTodos => (
                    <ActionBar
                      clearCompletedTodos={clearCompletedTodos}
                      refetch={refetch}
                      count={todos.length}
                      filter={filter}
                      toggleFilter={toggleFilter}
                    />
                  )}
                </ClearCompletedTodos>
              </Fragment>
            );
          }}
        </GetAllTodos>
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
