import styled from 'styled-components';
import Link from 'next/link';

const Item = styled.li`
  display: inline-block;
  margin: 0;
  margin-left: 1rem;
  border-bottom: none;

  a {
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.black};
  }

  a:hover {
    opacity: 0.8;
    text-decoration: none;
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
