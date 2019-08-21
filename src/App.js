import React from 'react';
import Footer from './Layouts/Footer';
import { Provider, ReactReduxContext } from 'react-redux';
import { store } from './store/todosStore';
import TodosList from './TodoList/TodoList';
import PreLoader from './PreLoader';

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <PreLoader>
            <TodosList />
          </PreLoader>
        )}
      </ReactReduxContext.Consumer>
      <Footer />
    </Provider>
  );
};

export default App;
