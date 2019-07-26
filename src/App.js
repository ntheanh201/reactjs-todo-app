import React, { Component } from "react";
import Footer from "./Layouts/Footer";
import TodoList from "./TodoList/TodoList";
import { Provider, ReactReduxContext } from 'react-redux'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ReactReduxContext.Consumer>
          {({ store }) =>
            <TodoList />
          }
        </ReactReduxContext.Consumer>
        <Footer />
      </Provider>
    );
  }
}

export default App;
