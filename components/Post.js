import Link from 'next/link';

const Post = (props) => (
  <li key={props.id}>
    <h3>
      <Link href="/blog/[id]" as={`/blog/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </h3>
    Date: {props.date}
    <br />
    {props.spoiler}
  </li>
);

export default Post;
