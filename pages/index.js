import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Welcome to my website!</h1>

      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
}
