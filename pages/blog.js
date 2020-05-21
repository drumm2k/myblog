import Link from 'next/link';
import { getAllPostsData } from '../lib/posts';
import Post from '../components/Post';

export default function Index({ postsData }) {
  return (
    <article>
      <h2>Blog</h2>
      <ul>
        {postsData.map(({ id, title, date, spoiler }) => (
          <Post key={id} id={id} title={title} date={date} spoiler={spoiler} />
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
