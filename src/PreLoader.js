import { connect } from 'react-redux';
import { getAllTodos } from './actions/actionTypes';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllTodos: () => dispatch(getAllTodos())
  };
};

const PreLoader = props => {
  props.getAllTodos();
  return props.children;
};

export default connect(
  null,
  mapDispatchToProps
)(PreLoader);
