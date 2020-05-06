import styled from 'styled-components';
import { getPosts } from '../lib/posts';

const Title = styled.h1``;

export default function Index({ postsData }) {
  return (
    <div>
      <Title>Welcome to my website!</Title>
      <h2>Blog</h2>
      <ul>
        {postsData.map(({ id, title, date, spoiler }) => (
          <li key={id}>
            {title}
            <br />
            {date}
            <br />
            {spoiler}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const postsData = getPosts();

  return {
    props: {
      postsData,
    },
  };
}
