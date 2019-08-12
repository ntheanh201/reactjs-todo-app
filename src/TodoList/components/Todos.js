import React, { Component } from 'react'
import styled from 'styled-components';
import TodoItemContainer from './TodoItemContainer';

export default class Todos extends Component {

    showData = () => {
        const {todos} = this.props
        return todos.map((todo, index) =>
            <TodoItemContainer
                key={index}
                todo={todo} />
        )
    }

    render() {
        return (
            <Wrapper>
                <List>
                    {this.showData()}
                </List>
            </Wrapper>
        )
    }
}

const Wrapper = styled.section`
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
`;

const List = styled.ul`
    margin: 0;
	padding: 0;
	list-style: none;
`;