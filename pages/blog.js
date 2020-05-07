import styled from 'styled-components';
import Link from 'next/link';
import { getAllPostsData } from '../lib/posts';

export default function Index({ postsData }) {
  return (
    <article>
      <h2>Blog</h2>
      <ul>
        {postsData.map(({ id, title, date, spoiler }) => (
          <li key={id}>
            <h3>
              <Link href="/blog/[id]" as={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
            </h3>
            Date: {date}
            <br />
            {spoiler}
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </article>
  );
}

export async function getStaticProps() {
  const postsData = getAllPostsData();

  return {
    props: {
      postsData,
    },
  };
}
