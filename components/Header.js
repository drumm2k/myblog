import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  align-items: center;
`;

const Logo = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: palegoldenrod;
  font-size: 3rem;
`;

const Nav = styled.div`
  width: 3rem;
  height: 3rem;

  background-color: palegoldenrod;
`;

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader className="wrapper">
        <Logo />
        <Nav />
      </StyledHeader>
    );
  }
}
