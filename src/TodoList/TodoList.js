import React, { Component, Fragment } from "react";
import Title from "../Ui/components/Title";
import Todos from "./components/Todos";

// the order how you import is not clean, you should import from packages first and then from components
import styled from "styled-components";
import ActionBar from "./components/ActionBar";
import InputBar from "./components/InputBar";
import { TodosContext } from "../Contexts/Todos";

export default class TodoList extends Component {
  static contextType = TodosContext;

  // constructor(props, context) {
  //     super(props, context);
  // }

  render() {
    // 1 of the reason why whe use context api is because we dont need to receive props and give to components again
    // you could just use TodoContext directly in each component and dont need to do this way anymore
    const {
      createTodo,
      toggleAllTodo,
      updateTodo,
      filteredTodos,
      clearCompletedTodo,
      filter,
      toggleFilter
    } = this.context;
    return (
      <Fragment>
        <Title>todos</Title>
        <Wrapper>
          <InputBar createTodo={createTodo} toggleAllTodo={toggleAllTodo} />
          <Todos updateTodo={updateTodo} todos={filteredTodos} />
          <ActionBar
            clearCompletedClick={clearCompletedTodo}
            filter={filter}
            toggleFilter={toggleFilter}
            count={this.context.getUndoneTodo()}
          />
        </Wrapper>
      </Fragment>
    );
  }
}

const Wrapper = styled.section`
  background: #fff;
  margin: 60px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;
