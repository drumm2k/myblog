function importPosts(post) {
  return post.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: post(fileName),
  }));
}

export default function getAllPostsData() {
  return importPosts(require.context('../pages/?preview', true, /\.mdx$/)).sort(
    (a, b) => Date.parse(b.module.meta.date) - Date.parse(a.module.meta.date)
  );
}
