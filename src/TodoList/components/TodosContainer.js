import { connect } from 'react-redux'
import { getVisibleTodos } from '../../selectors/selectors'
import Todos from './Todos'

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state),
    }
}

export default connect(mapStateToProps)(Todos)
