import Post from '../components/Post';

export default { title: 'Blog' };

export const PostPreview = () => (
  <Post
    id="1"
    title="Title"
    date="May 6 2020 23:13"
    spoiler="Welcome to my blog"
  />
);
