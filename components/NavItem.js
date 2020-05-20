import styled from 'styled-components';
import Link from 'next/link';

const Item = styled.li`
  font-weight: 700;

  @media (min-width: 736px) {
    margin-left: 1.6rem;
  }
`;

const NavItem = (props) => {
  return (
    <Item>
      <Link href={props.url}>
        <a>{props.name}</a>
      </Link>
    </Item>
  );
};

export default NavItem;
