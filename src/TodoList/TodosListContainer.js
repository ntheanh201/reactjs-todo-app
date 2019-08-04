import { connect } from 'react-redux'
import { getAllTodos } from '../actions/actionTypes'
import TodoList from './TodoList';

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         getAllTodos
//     }
// }

// export default connect(null, mapDispatchToProps)(TodoList)

export default TodoList