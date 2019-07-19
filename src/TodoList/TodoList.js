import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Title from "../Ui/components/Title";
import Todos from "./components/Todos";
import ActionBar from "./components/ActionBar";
import InputBar from "./components/InputBar";

export default class TodoList extends Component {

  render() {
    return (
      <Fragment>
        <Title>todos</Title>
        <Wrapper>
          <InputBar />
          <Todos />
          <ActionBar />
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
