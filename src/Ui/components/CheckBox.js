import React, { Component } from 'react'
import styled from 'styled-components';
import Icon from './Icon';
import { TodosContext } from "../../Contexts/Todos";

import { ReactComponent as CheckIcon } from '../../Assets/icons/checked.svg';

export default class CheckBox extends Component {
    static contextType = TodosContext;
    render() {
        const { checked, onClick } = this.props;
        const size = "28px"
        return (
            <Wrapper size={size} onClick={onClick}>
                {checked && <Icon size={size}>
                    <CheckIcon />
                </Icon>}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    position: absolute;
    top: 16px;
    left: 10px;
    height: ${props => props.size};
    width: ${props => props.size};
`;