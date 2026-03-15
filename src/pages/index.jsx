import { useState, useEffect } from "react";
import postsData from "../post.json";
import Article from "../components/Article";
import Search from "../components/search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value) => {
    console.log(value);
    const filteredPosts = postsData.filter((item) => item.title.includes(value));
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  useEffect(() => {
    console.log("Post Baru");
  }, [posts]);

  return (
    <>
      <h1>Blog Sederhana</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map(({ title, tags, date, isNew }, index) => {
        return <Article {...{ title, tags, date, isNew }} key={index} />;
      })}
      <hr />
      <h2>External Posts</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
}

export default Homepage;
