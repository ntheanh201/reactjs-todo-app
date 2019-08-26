import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

import { ReactComponent as CheckIcon } from '../../assets/icons/checked.svg'

const propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string
}

const defaultProps = {
  checked: false,
  onClick: () => {},
  size: '28px'
}

const Component = ({ checked, onClick, size }) => {
  return (
    <Wrapper size={size} onClick={onClick}>
      {checked && (
        <Icon size={size}>
          <CheckIcon />
        </Icon>
      )}
    </Wrapper>
  )
}

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export const CheckBox = Component

const Wrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 10px;
  height: ${props => props.size};
  width: ${props => props.size};
`
