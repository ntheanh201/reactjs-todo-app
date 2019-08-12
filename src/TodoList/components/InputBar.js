import React, { Component } from 'react'
import styled from 'styled-components'
import uuid from 'uuid'

export default class InputBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            toggleStatus: false
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleToggleAllTodos = () => {
        Promise.resolve(this.props.toggleAllTodos({
            variables: {
                toggleStatus: !this.state.toggleStatus
            }
        })).then(() => this.props.refetch())
        this.setState({
            toggleStatus: !this.state.toggleStatus
        })
    }

    _handleKeyDown = (event, addTodo) => {
        if (event.key === 'Enter') {
            // this.props.handleSubmit(this.state.text)

            Promise.resolve(addTodo({
                variables: {
                    input: {
                        id: uuid(),
                        isDone: false,
                        name: this.state.text
                    }
                }
            })).then(() => this.props.refetch())

        }
    }

    render() {
        const { addTodo } = this.props
        return (
            <Wrapper>
                <ToggleLabel onClick={() => this.handleToggleAllTodos()} htmlFor="toggle-all">Mark all as complete</ToggleLabel>
                <HeaderInput onChange={(event) => this.handleChange(event)} onKeyDown={(event) => this._handleKeyDown(event, addTodo)} placeholder="What needs to be done?"></HeaderInput>
            </Wrapper>
        )
    }
}

const ToggleLabel = styled.label`
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: 13px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    z-index: 3;

    ::before {
        content: '❯';
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
    }
`;

const Input = styled.input`
    ::-webkit-input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }
    ::-moz-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }
    ::input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }
`;

const Wrapper = styled.header``;

const HeaderInput = styled(Input)`
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`;
