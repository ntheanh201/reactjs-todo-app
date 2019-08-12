import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Title from "../Ui/components/Title";
import ActionBar from "./components/ActionBar";
import { GetAllTodos } from '../queries/TodosQuery'
import { AddTodo, UpdateTodo, ToggleAllTodos, ClearCompletedTodos } from '../mutations/TodosMutations'
import Todos from "./components/Todos";

export default class TodoList extends Component {
  state = {
    filter: 'showAll'
  }
  toggleFilter = (filter) => {
    this.setState({
      filter
    })
  }

  filterTodos = (todos = []) => {
    switch (this.state.filter) {
      case 'showAll': return todos
      case 'showActive': return todos.filter(({ isDone }) => !isDone)
      case 'showCompleted': return todos.filter(({ isDone }) => isDone)
      default: return []
    }
  }

  render() {
    return (
      <Fragment>
        <Title>todos</Title>
        <Wrapper>
          <GetAllTodos >
            {(data, refetch) => {
              const todos = this.filterTodos(data.todos)
              return <Fragment >
                <ToggleAllTodos >
                  {
                    (toggleAllTodos) => (
                      <AddTodo refetch={refetch} toggleAllTodos={toggleAllTodos} />
                    )
                  }
                </ToggleAllTodos>
                <UpdateTodo>
                  {
                    (updateTodo) => (
                      <Todos
                        todos={todos}
                        refetch={refetch}
                        updateTodo={updateTodo}
                      />
                    )
                  }
                </UpdateTodo>
                <ClearCompletedTodos>
                  {
                    (clearCompletedTodos) => (
                      <ActionBar
                        clearCompletedTodos = {clearCompletedTodos}
                        toggleFilter={this.toggleFilter}
                        filter={this.state.filter}
                        refetch = {refetch}
                        count = {todos.length}
                      />
                    )
                  }
                </ClearCompletedTodos>
              </Fragment>
            }}
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
