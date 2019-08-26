import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Title from '../Ui/components/Title'
import ActionBar from './components/ActionBar'
import Todos from './components/Todos'
import InputBar from './components/InputBar'

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  toggleAllTodos: PropTypes.func.isRequired,
  clearCompletedTodos: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

const defaultProps = {
  addTodo: () => {},
  updateTodo: () => {},
  toggleAllTodos: () => {},
  clearCompletedTodos: () => {},
  setFilter: () => {},
  filter: 'showAll',
  todos: []
}

const TodoList = ({
  todos,
  addTodo,
  updateTodo,
  toggleAllTodos,
  clearCompletedTodos,
  setFilter,
  filter
}) => {
  const toggleFilter = filter => {
    setFilter(filter)
  }

  return (
    <Fragment>
      <Title>todos</Title>
      <Wrapper>
        <InputBar addTodo={addTodo} toggleAllTodos={toggleAllTodos} />
        <Todos todos={todos} updateTodo={updateTodo} />
        <ActionBar
          clearCompletedTodos={clearCompletedTodos}
          count={todos.length}
          filter={filter}
          toggleFilter={toggleFilter}
        />
      </Wrapper>
    </Fragment>
  )
}

TodoList.propTypes = propTypes
TodoList.defaultProps = defaultProps
export default TodoList

const Wrapper = styled.section`
  background: #fff;
  margin: 60px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`
