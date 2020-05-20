import styled from 'styled-components';

import NavItem from './NavItem';

const StyledNavList = styled.ul`
  position: fixed;
  text-align: center;
  display: none;
  flex-direction: column;
  background: #fff;
  width: 100%;

  &.opened {
    display: flex;
  }
`;

export default class NavList extends React.Component {
  render() {
    return (
      <StyledNavList
        className={this.props.navOpened ? 'opened wrapper' : 'wrapper'}
      >
        <NavItem url={'/blog'} name={'Blog'} />
        <NavItem url={'/blog'} name={'Blog'} />
        <NavItem url={'/blog'} name={'Blog'} />
        <NavItem url={'/blog'} name={'Blog'} />
      </StyledNavList>
    );
  }
}
