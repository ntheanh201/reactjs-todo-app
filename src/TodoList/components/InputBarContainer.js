import { connect } from 'react-redux';
import { addTodo, toggleAllTodos } from '../../actions/actionTypes';
import InputBar from './InputBar';

const mapStateToProps = ({ todosReducer }, ownProps) => {
  return {
    toggleStatus: todosReducer.toggleStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: text => dispatch(addTodo(text)),
    toggleAllTodos: toggleStatus => dispatch(toggleAllTodos(toggleStatus))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBar);
