import React from 'react';
import { BrowserRouter as Router, Link as Links } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  filter: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  clearCompletedTodo: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired
};

const defaultProps = {
  clearCompletedTodo: () => {},
  toggleFiler: () => {}
};

const ActionBar = props => {
  const { clearCompletedTodo, filter, toggleFilter, count } = props;
  return (
    <Footer>
      <Span>
        <Strong>{count}</Strong> {count > 1 ? 'items' : 'item'} left
      </Span>
      <Router>
        <FiltersUl>
          <Li>
            <StyledLink
              highlighted={filter === 'showAll' ? 1 : 0}
              onClick={() => toggleFilter('showAll')}
              to="#/"
            >
              All
            </StyledLink>
          </Li>
          <Li>
            <StyledLink
              highlighted={filter === 'showActive' ? 1 : 0}
              onClick={() => toggleFilter('showActive')}
              to="#/active"
            >
              Active
            </StyledLink>
          </Li>
          <Li>
            <StyledLink
              highlighted={filter === 'showCompleted' ? 1 : 0}
              onClick={() => toggleFilter('showCompleted')}
              to="#/completed"
            >
              Completed
            </StyledLink>
          </Li>
        </FiltersUl>
      </Router>
      <ClearCompletedButton onClick={() => clearCompletedTodo()}>
        Clear completed
      </ClearCompletedButton>
    </Footer>
  );
};

ActionBar.propTypes = propTypes;
ActionBar.defaultProps = defaultProps;
export default ActionBar;

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const FiltersUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
`;

const Li = styled.li`
  display: inline;
`;

const Link = context => {
  return <Links {...context} />;
};

const StyledLink = styled(Link)`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  border-color: ${props =>
    props.highlighted ? 'rgba(175, 47, 47, 0.2)' : 'none'};
  :hover {
    border-color: rgba(175, 47, 47, 0.1);
  }
`;

const Span = styled.span`
  float: left;
  text-align: left;
`;

const ClearCompletedButton = styled(Button)`
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  ::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

const Strong = styled.strong`
  font-weight: 300;
`;
