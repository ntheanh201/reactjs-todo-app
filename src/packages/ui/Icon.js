import React from 'react'
import styled from 'styled-components'

const Component = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

export const Icon = Component

const Wrapper = styled.div`
  path {
    filled: ${props => props.color};
  }
  height: ${props => props.size};
  width: ${props => props.size};
`
