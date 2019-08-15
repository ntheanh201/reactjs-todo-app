import React, { Component } from "react";
import uuid from "uuid";

export const TodosContext = React.createContext({
  todos: [],
  filteredTodos: [],
  createTodo: () => { },
  updateTodo: () => { },
  filter: false,
  toggleFilter: () => { },
  filterTodos: () => { },
  clearCompletedTodo: () => { },
  toggleAllTodo: () => { },
  getUndoneTodo: () => { }
});

export const todoFilters = [
  {
    name: "showAll",
    filterTodos: todos => todos
  },
  {
    name: "showActive",
    filterTodos: todos => todos.filter(({ isDone }) => !isDone)
  },
  {
    name: "showCompleted",
    filterTodos: todos => todos.filter(({ isDone }) => isDone)
  }
];

export default class TodosContainer extends Component {
  constructor(props) {
    const todos = [
      {
        id: 0,
        isDone: false,
        name: 'TodoItem 1'
      },
      {
        id: 1,
        isDone: true,
        name: "TodoItem 2"
      }
    ];
    super(props);
    this.state = {
      todos,
      filteredTodos: todos,
      filter: todoFilters[0],
      toggleStatus: false
    };
  }

  createTodo = name => {
    const todos = [...this.state.todos, { id: uuid(), isDone: false, name }];
    this.setState(
      {
        todos
      },
      this.filterTodos
    );
  };

  updateTodo = todo => {
    let { todos } = this.state;
    const index = todos.map(todo => todo.id).indexOf(todo.id);
    todos[index] = todo;
    this.setState(
      {
        todos
      },
      this.filterTodos
    );
  };

  filterTodos = () => {
    const { filter } = this.state;
    const { todos } = this.state;
    this.setState({
      filteredTodos: filter.filterTodos(todos)
    });
  };

  toggleFilter = index => {
    const currentFilter = todoFilters[index];
    this.setState(
      {
        filter: currentFilter
      },
      this.filterTodos
    );
  };

  filterTodos = () => {
    const { filter, todos } = this.state;
    this.setState({
      filteredTodos: filter.filterTodos(todos)
    });
  };

  clearCompletedTodo = () => {
    let { todos } = this.state;
    this.setState(
      {
        todos: todos.filter(({ isDone }) => !isDone)
      },
      this.filterTodos
    );
  };

  toggleAllTodo = () => {
    let { todos, toggleStatus } = this.state;
    this.setState(
      {
        // you are not using isDone
        todos: todos.map(({ id, name }) => ({
          id,
          isDone: !toggleStatus,
          name
        })),
        toggleStatus: !toggleStatus
      },
      this.filterTodos
    )
  };

  getUndoneTodo = () => {
    const { filteredTodos } = this.state;
    return filteredTodos.filter(({ isDone }) => !isDone).length;
  };

  render() {
    return (
      <TodosContext.Provider
        value={{
          todos: this.state.todos,
          createTodo: this.createTodo,
          updateTodo: this.updateTodo,
          filteredTodos: this.state.filteredTodos,
          filter: this.state.filter,
          toggleFilter: this.toggleFilter,
          filterTodos: this.filterTodos,
          clearCompletedTodo: this.clearCompletedTodo,
          toggleAllTodo: this.toggleAllTodo,
          getUndoneTodo: this.getUndoneTodo
        }}
      >
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}
