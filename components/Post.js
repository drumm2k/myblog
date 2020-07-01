import Link from 'next/link';

const Post = (props) => (
  <li key={props.link}>
    <div>
      <Link href={props.link}>
        <a>{props.title}</a>
      </Link>
    </div>
    <p>Date: {props.date}</p>
    <p>{props.description}</p>
    <p>Tags: {props.tags}</p>
  </li>
);

export default Post;
