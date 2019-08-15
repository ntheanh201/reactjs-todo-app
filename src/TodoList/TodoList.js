import React, { Component } from 'react'
import uuid from 'uuid'
import Todos from './components/Todos';
import styled from 'styled-components'
import ActionBar from './components/ActionBar';
import InputBar from './components/InputBar';

const filters = [
    {
        name: 'showAll',
        filterTodos: (todos) => todos
    }, {
        name: 'showActive',
        filterTodos: (todos) => todos.filter(({ isDone }) => !isDone)
    }, {
        name: 'showCompleted',
        filterTodos: (todos) => todos.filter(({ isDone }) => isDone)
    }
]

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        const todos = [
            {
                id: 0,
                isDone: false,
                name: 'TodoItem 1'
            },
            {
                id: 1,
                isDone: true,
                name: 'TodoItem 2'
            }
        ]
        this.state = {
            todos,
            filteredTodos: todos,
            count: 0,
            toggleStatus: false,
            filter: filters[0]
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

    getUndoneTodo = () => {
        const { filteredTodos } = this.state
        return filteredTodos.reduce((count, { isDone }) => !isDone ? count += 1 : count, 0)
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

    render() {
        return (
            <Wrapper>
                <InputBar
                    createTodo={this.createTodo}
                    toggleAllTodo={this.toggleAllTodo}
                />
                <Todos
                    updateTodo={this.updateTodo}
                    todos={this.state.filteredTodos} />
                <ActionBar
                    clearCompletedClick={this.clearCompletedTodo}
                    filter={this.state.filter}
                    toggleFilter={this.toggleFilter}
                    count={this.getUndoneTodo()} />
            </Wrapper>
        )
    }
}

const Wrapper = styled.section`
  background: #fff;
	margin: 60px 0 40px 0;
	position: relative;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;