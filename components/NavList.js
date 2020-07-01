import styled from 'styled-components';

import NavItem from './NavItem';

const StyledNavList = styled.ul`
  display: flex;
`;

export default class NavList extends React.Component {
  render() {
    return (
      <StyledNavList>
        <NavItem url={'/about'} name={'About'} />
        <NavItem url={'/blog'} name={'Blog'} />
      </StyledNavList>
    );
  }
}
