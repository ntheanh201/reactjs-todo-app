import React, { Component } from 'react'
import Todos from './components/Todos';
import styled from 'styled-components'
import ActionBar from './components/ActionBar';
import InputBar from './components/InputBar';
import TodosContext from './todos-context';

export default class TodoList extends Component {
    static contextType = TodosContext;

    // constructor(props, context) {
    //     super(props, context);
    // }

    render() {
        const { createTodo,
            toggleAllTodo,
            updateTodo,
            filteredTodos,
            clearCompletedTodo,
            filter,
            toggleFilter,
        } = this.context;
        return (
            <Wrapper>
                <InputBar
                    createTodo={createTodo}
                    toggleAllTodo={toggleAllTodo} />
                <Todos
                    updateTodo={updateTodo}
                    todos={filteredTodos} />
                <ActionBar
                    clearCompletedClick={clearCompletedTodo}
                    filter={filter}
                    toggleFilter={toggleFilter}
                    count={this.context.getUndoneTodo()} />
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