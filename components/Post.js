import Link from 'next/link';

const Post = (props) => (
  <li key={props.id}>
    <div>
      <Link href="/blog/[id]" as={`/blog/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </div>
    Date: {props.date}
    <br />
    {props.spoiler}
  </li>
);

export default Post;
