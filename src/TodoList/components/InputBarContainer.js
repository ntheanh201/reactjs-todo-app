import { connect } from 'react-redux'
import { addTodo, toggleAllTodo } from '../../actions/actionTypes';
import InputBar from './InputBar';

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (text) => dispatch(addTodo(text)),
        toggleAllTodo: () => dispatch(toggleAllTodo())
    }
}

export default connect(null, mapDispatchToProps)(InputBar)