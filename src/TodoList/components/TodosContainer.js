import { connect } from 'react-redux';
import { getVisibleTodos } from '../../selectors/selectors';
import Todos from './Todos';

const mapStateToProps = ({ todosReducer }, ownProps) => {
  return {
    todos: getVisibleTodos(todosReducer)
  };
};

export default connect(mapStateToProps)(Todos);
