import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {
  const posts = useLoaderData();

  return (
    <>
      <h2>My Blok Posts</h2>
      {posts.map((item, index) => (
        <div key={index.id}>
          <Link to={`/blogs/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blog;
