import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import NavMenu from './NavMenu';
import NavList from './NavList';

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  align-items: center;
`;

const Logo = styled.a`
  width: 4rem;
  height: 4rem;
  background-color: deepskyblue;
  font-size: 3rem;
  border-bottom: none;
`;

const BreakLine = styled.div`
  flex-basis: 100%;
  height: 0;

  @media (min-width: 736px) {
    display: none;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      navOpened: false,
    };

    Router.events.on('routeChangeComplete', (url) => {
      this.setState({ navOpened: false });
    });
  }

  toggleNav() {
    const currentState = this.state.navOpened;
    this.setState({ navOpened: !currentState });
  }

  render() {
    return (
      <>
        <StyledHeader className="wrapper">
          <Link href="/">
            <Logo />
          </Link>

          <NavMenu
            toggleNav={this.toggleNav}
            navOpened={this.state.navOpened}
          />
          <BreakLine />

          <NavList navOpened={this.state.navOpened} />
        </StyledHeader>
      </>
    );
  }
}
