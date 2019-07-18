import React, { Component, Fragment } from 'react';
import uuid from 'uuid'
import Footer from './Layouts/Footer';
import TodoList from './TodoList/TodoList';
import styled from 'styled-components'
import TodosContext from './TodoList/todos-context';


const filters = [{
  name: 'showAll',
  filterTodos: (todos) => todos
}, {
  name: 'showActive',
  filterTodos: (todos) => todos.filter(({ isDone }) => !isDone)
}, {
  name: 'showCompleted',
  filterTodos: (todos) => todos.filter(({ isDone }) => isDone)
}]

class App extends Component {
  constructor(props) {
    const todos = [{
      id: 0,
      isDone: false,
      name: 'TodoItem 1'
    }, {
      id: 1,
      isDone: true,
      name: 'TodoItem 2'
    }]
    super(props);
    this.state = {
      todos,
      filteredTodos: todos,
      filter: filters[0],
      toggleStatus: false,
    }
  }

  createTodo = (name) => {
    const todos = [...this.state.todos, { id: uuid(), isDone: false, name }]
    this.setState({
      todos: todos,
    }, this.filterTodos)

  }

  updateTodo = (todo) => {
    let { todos } = this.state
    const index = todos.map(todo => todo.id).indexOf(todo.id)
    todos[index] = todo
    this.setState({
      todos,
    }, this.filterTodos)
  }

  filterTodos = () => {
    const { filter } = this.state
    const { todos } = this.state
    this.setState({
      filteredTodos: filter.filterTodos(todos)
    })
  }

  toggleFilter = (index) => {
    const currentFilter = filters[index]
    this.setState({
      filter: currentFilter
    }, this.filterTodos)
  }

  filterTodos = () => {
    const { filter, todos } = this.state
    this.setState({
      filteredTodos: filter.filterTodos(todos)
    })
  }

  clearCompletedTodo = () => {
    let { todos } = this.state
    this.setState({
      todos: todos.filter(({ isDone }) => !isDone)
    }, this.filterTodos)
  }

  toggleAllTodo = () => {
    let { todos, toggleStatus } = this.state
    this.setState({
      todos: todos.map(({ id, isDone, name }) => ({ id, isDone: !toggleStatus, name })),
      toggleStatus: !toggleStatus,
    }, this.filterTodos)
  }

  getUndoneTodo = () => {
    const { filteredTodos } = this.state
    return filteredTodos.reduce((count, { isDone }) => !isDone ? count += 1 : count, 0)
  }

  render() {
    return (
      <Fragment>
        <Title>todos</Title>
        <TodosContext.Provider value={{
          todos: this.state.todos,
          createTodo: this.createTodo,
          updateTodo: this.updateTodo,
          filteredTodos: this.state.filteredTodos,
          filter: this.state.filter,
          toggleFilter: this.toggleFilter,
          filterTodos: this.filterTodos,
          clearCompletedTodo: this.clearCompletedTodo,
          toggleAllTodo: this.toggleAllTodo,
          getUndoneTodo: this.getUndoneTodo,
        }} >
          <TodoList />

        </TodosContext.Provider>
        <Footer />
      </Fragment >
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
