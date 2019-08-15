import React, { Component, Fragment } from 'react';
import Footer from './Layouts/Footer';
import TodoList from './TodoList/TodoList';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title>todos</Title>
        <TodoList />
        <Footer />
      </Fragment>
    );
  }
}

const Title = styled.h1`
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
`;

export default App;
