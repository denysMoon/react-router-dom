import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../types";

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  if (!posts.length) {
    return <h1>Nothing to show</h1>;
  }
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
