import React, { useContext } from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { TodosContext } from '../../Contexts/TodosContext'

// const propTypes = {
//   filteredTodos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       isDone: PropTypes.bool.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// }

const showData = props => {
  const { filteredTodos } = props
  return filteredTodos.map((todo, index) => (
    <TodoItem key={index} todo={todo} />
  ))
}

const Todos = () => {
  const context = useContext(TodosContext)

  return (
    <Wrapper>
      <List>{showData(context)}</List>
    </Wrapper>
  )
}
// Todos.propTypes = propTypes
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
