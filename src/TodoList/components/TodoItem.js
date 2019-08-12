import React, { Component } from 'react'
import styled from 'styled-components';
import CheckBox from '../../Ui/components/CheckBox';

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.handleEditMode(false)
        }
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    handleEditMode = (value) => {
        this.setState({
            editMode: value
        })
    }

    handleUpdateTodo = (todo, isDoneValue, nameValue) => {
        Promise
            .resolve(this.props.updateTodo({
                variables: {
                    input: {
                        id: todo.id,
                        isDone: isDoneValue,
                        name: nameValue
                    }
                }
            }))

            .then(() => this.props.refetch)

    }

    _handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const {isDone} = this.props.todo
            this.handleEditMode(false)
            this.handleUpdateTodo(this.props.todo, isDone, event.target.value)
        }
    }

    render() {
        const { todo } = this.props
        const {isDone, name} = todo
        return (
            <Li>
                <Wrapper>
                    <CheckBox onClick={() => this.handleUpdateTodo(todo, !isDone, name)} checked={todo.isDone} />
                    {

                        this.state.editMode ?
                            <EditInput
                                onKeyDown={(event) => this._handleKeyDown(event)} ref={this.setWrapperRef}
                                defaultValue={todo.name} />
                            : todo.isDone ?
                                <DoneLabel
                                    // onDoubleClick={() => this.handleEditMode(true)}
                                    onClick={() => this.handleEditMode(true)}
                                >{todo.name}

                                </DoneLabel> :
                                <UndoneLabel
                                    // onDoubleClick={() => this.handleEditMode(true)}
                                    onClick={() => this.handleEditMode(true)}
                                >{todo.name}
                                </UndoneLabel>

                    }

                </Wrapper>

            </Li>
        )
    }
}

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

const Wrapper = styled.div`
    display: block;
    position: relative;
`;

const Label = styled.label`
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
`;

const UndoneLabel = styled(Label)`
    word-break: break-all;
	padding: 15px 15px 15px 60px;
	display: block;
	line-height: 1.23;
    transition: color 0.4s;
    font-size: 24px;
`;

const DoneLabel = styled(UndoneLabel)`
    color: #d9d9d9;
    text-decoration: line-through;
`;

const Li = styled.li`
    display: inline;
`;

const EditInput = styled(Input)`
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

    display: block;
    width: calc(100% - 43px);
    padding: 12px 16px;
    margin: 0 0 0 43px;
`;