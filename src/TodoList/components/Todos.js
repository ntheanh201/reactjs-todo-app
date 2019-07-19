import React, { Component } from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { TodosContext } from "../../Contexts/Todos";

export default class Todos extends Component {
    static contextType = TodosContext;

    getData = (dataFromInput) => {
        this.setState({content: dataFromInput})
    }

    showData = () => {
        const {filteredTodos} = this.context;
        return filteredTodos.map((todo, index) => 
            <TodoItem
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