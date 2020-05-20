import styled from 'styled-components';

import NavItem from './NavItem';

const StyledNavList = styled.ul`
  text-align: center;
  display: none;
  flex-direction: column;
  background: #fff;
  width: 100%;
  padding: 1.6rem;

  &.opened {
    display: flex;
  }

  @media (min-width: 736px) {
    position: relative;
    display: flex;
    flex-direction: row;
    width: auto;
    padding: 0;
  }
`;

export default class NavList extends React.Component {
  render() {
    return (
      <StyledNavList className={this.props.navOpened ? 'opened' : null}>
        <NavItem url={'/blog'} name={'Blog'} />
        <NavItem url={'/blog'} name={'Blog'} />
        <NavItem url={'/blog'} name={'Blog'} />
        <NavItem url={'/blog'} name={'Blog'} />
      </StyledNavList>
    );
  }
}
