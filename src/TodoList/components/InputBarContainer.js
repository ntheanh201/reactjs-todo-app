import { connect } from 'react-redux';
import { addTodo, toggleAllTodos } from '../../actions/actionTypes';
import InputBar from './InputBar';

const mapStateToProps = (state, ownProps) => {
  return {
    toggleStatus: state.toggleStatus
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
