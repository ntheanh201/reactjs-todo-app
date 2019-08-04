import React, { Component } from "react";
import Footer from "./Layouts/Footer";
import { Provider, ReactReduxContext } from 'react-redux'
import { store } from './store/index'
import TodosListContainer from "./TodoList/TodosListContainer";
import PreLoader from "./PreLoader";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxContext.Consumer>
          {({ store }) =>
            <PreLoader>
              <TodosListContainer />
            </PreLoader>
          }
        </ReactReduxContext.Consumer>
        <Footer />
      </Provider>
    );
  }
}

export default App;
