import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Title from "../Ui/components/Title";
import ActionBar from "./components/ActionBar";
import { GetAllTodos } from '../queries/TodosQuery'
import { AddTodo } from '../mutations/TodosMutations'
import Todos from "./components/Todos";

export default class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <Title>todos</Title>
        <Wrapper>
          <GetAllTodos >
            {(data, refetch) => (
              <Fragment >
                <AddTodo refetch={refetch} />
                <Todos todos={data.todos} />
                <ActionBar />
              </Fragment>
            )}
          </GetAllTodos>
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
