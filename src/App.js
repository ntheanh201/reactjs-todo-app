import React, { Component, Fragment } from "react";
import Footer from "./Layouts/Footer";
import TodoList from "./TodoList/TodoList";
import TodosContainer from "./Contexts/Todos";

class App extends Component {
  render() {
    return (
      <Fragment>
        <TodosContainer>
          <TodoList />
        </TodosContainer>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
