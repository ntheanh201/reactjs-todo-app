import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { ReactComponent as CheckIcon } from '../../Assets/icons/checked.svg'

const CheckBox = props => {
  const { checked, onClick } = props
  const size = '28px'
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

export default CheckBox

const Wrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 10px;
  height: ${props => props.size};
  width: ${props => props.size};
`
