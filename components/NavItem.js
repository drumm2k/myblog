import styled from 'styled-components';
import Link from 'next/link';

const Item = styled.li`
  display: inline-block;
  border-bottom: 1px solid #eaeaea;
  height: 4.8rem;
  line-height: 4.8rem;
  margin: 0 1.6rem;

  @media (min-width: 736px) {
    margin: 0;
    margin-left: 1.6rem;
    border-bottom: none;
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
