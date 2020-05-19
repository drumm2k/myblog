import Link from 'next/link';
import Grid from '../components/Grid';

export default function Index() {
  return (
    <div>
      <Grid />
      <h1>Welcome to my website!</h1>

      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
}
