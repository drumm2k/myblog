import getAllPostsData from '../lib/posts';
import Post from '../components/Post';

export default function Index() {
  const postsData = getAllPostsData();

  return (
    <article>
      <h2>Blog</h2>
      <ul>
        {postsData.map(({ link, module: { meta } }) => (
          <Post
            key={link}
            title={meta.title}
            date={meta.date}
            description={meta.description}
            tags={meta.tags}
            link={link}
          />
        ))}
      </ul>
    </article>
  );
}

// export async function getStaticProps() {
//   const postsData = getAllPostsData();

//   return {
//     props: {
//       postsData,
//     },
//   };
// }
