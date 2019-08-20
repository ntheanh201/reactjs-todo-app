import React from 'react';
import styled from 'styled-components';
import TodoItemContainer from './TodoItemContainer';

const Todos = props => {
  const showData = () => {
    const { todos } = props;
    return todos.map((todo, index) => (
      <TodoItemContainer key={index} todo={todo} />
    ));
  };
  return (
    <Wrapper>
      <List>{showData()}</List>
    </Wrapper>
  );
};

export default Todos;

const Wrapper = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
