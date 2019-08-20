import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from '../Ui/components/Title';
import TodosContainer from './components/TodosContainer';
import InputBarContainer from './components/InputBarContainer';
import ActionBarContainer from './components/ActionBarContainer';

const TodoList = () => {
  return (
    <Fragment>
      <Title>todos</Title>
      <Wrapper>
        <InputBarContainer />
        <TodosContainer />
        <ActionBarContainer />
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
