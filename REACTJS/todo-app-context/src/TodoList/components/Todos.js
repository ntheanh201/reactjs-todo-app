import React, { Component } from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';

export default class Todos extends Component {
    

    getData = (dataFromInput) => {
        this.setState({content: dataFromInput})
    }

    showData = () => {
        const {todos, updateTodo} = this.props;
        return todos.map((todo, index) => 
            <TodoItem
            updateTodo={updateTodo}
            key={index}
            todo={todo} />
        )
    }

    render() {
        return (
            <Wrapper>
               
                <List>
                    {/* todoList */}
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



// const CompletedLi = styled.li`
//     position: relative;
// 	font-size: 24px;
//     border-bottom: 1px solid #ededed;
    
//     :last-child {
//         border-bottom: none;
//     }
// `;
