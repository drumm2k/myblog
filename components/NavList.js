import styled from 'styled-components';

import NavItem from './NavItem';

const StyledNavList = styled.ul`
  position: fixed;
  text-align: center;
  display: none;
  flex-direction: column;
  background: #fff;
  width: 100%;
  top: 72px;
  left: 0;
  bottom: 0;

  &.opened {
    display: flex;
  }

  @media (min-width: 736px) {
    position: relative;
    display: flex;
    flex-direction: row;
    top: 0;
    width: auto;
  }
`;

export default class NavList extends React.Component {
  render() {
    return (
      <StyledNavList className={this.props.navOpened ? 'opened' : null}>
        <NavItem url={'/about'} name={'About'} />
        <NavItem url={'/blog'} name={'Blog'} />
      </StyledNavList>
    );
  }
}
