import React, { Fragment } from 'react'
import { Footer } from './Layouts/Footer'
import TodoList from './TodoList/TodoList'
import TodosContainer from './Contexts/TodosContext'

const App = () => {
  return (
    <Fragment>
      <TodosContainer>
        <TodoList />
      </TodosContainer>
      <Footer />
    </Fragment>
  )
}

export default App
