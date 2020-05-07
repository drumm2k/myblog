import styled from 'styled-components';
import Link from 'next/link';
import { getPostsData } from '../lib/posts';

const Title = styled.h1``;

export default function Index({ postsData }) {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {postsData.map(({ id, title, date, spoiler }) => (
          <li key={id}>
            Title: <b>{title}</b> ({id})
            <br />
            Date: {date}
            <br />
            {spoiler}
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const postsData = getPostsData();

  return {
    props: {
      postsData,
    },
  };
}
