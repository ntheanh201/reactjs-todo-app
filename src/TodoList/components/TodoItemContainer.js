import { updateTodo } from '../../actions/actionTypes';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const mapDispatchToProps = dispatch => {
  return {
    updateTodo: todo => {
      dispatch(updateTodo(todo));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
