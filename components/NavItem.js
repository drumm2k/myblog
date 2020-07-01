import styled from 'styled-components';
import Link from 'next/link';

const Item = styled.li`
  display: inline-block;

  height: 4.8rem;
  line-height: 4.8rem;

  margin: 0;
  margin-left: 1.6rem;
  border-bottom: none;

  a {
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
