import React, { Component } from 'react'
import styled from 'styled-components';

export default class Icon extends Component {
    render() {
        const { children, ...restProps } = this.props
        return (
            <Wrapper {...restProps}>
                {this.props.children}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
 path {
    filled: ${props => props.color};
 }
 height: ${props => props.size};
 width: ${props => props.size};
`