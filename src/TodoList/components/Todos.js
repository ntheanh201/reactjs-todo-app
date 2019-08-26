import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  updateTodo: PropTypes.func.isRequired
}

const defaultProps = {
  updateTodo: () => {}
}

const Todos = props => {
  const showData = () => {
    const { todos, updateTodo } = props
    return todos.map((todo, index) => (
      <TodoItem updateTodo={updateTodo} key={index} todo={todo} />
    ))
  }
  return (
    <Wrapper>
      <List>{showData()}</List>
    </Wrapper>
  )
}

Todos.propTypes = propTypes
Todos.defaultProps = defaultProps
export default Todos

const Wrapper = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
