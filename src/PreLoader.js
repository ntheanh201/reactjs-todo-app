import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getAllTodos} from './actions/actionTypes'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllTodos: () => dispatch(getAllTodos())
        // getAllTodos: bindActionCreators(getAllTodos, dispatch)
    }
}

class PreLoader extends Component {
    componentDidMount(){
        this.props.getAllTodos()
    }

    render() {
        return this.props.children
        
    }
}

export default connect(null, mapDispatchToProps)(PreLoader)