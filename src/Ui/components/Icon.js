import React from 'react';
import styled from 'styled-components';

const Icon = props => {
  const { children, ...restProps } = props;
  return <Wrapper {...restProps}>{props.children}</Wrapper>;
};

export default Icon;

const Wrapper = styled.div`
  path {
    filled: ${props => props.color};
  }
  height: ${props => props.size};
  width: ${props => props.size};
`;
