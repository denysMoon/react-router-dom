import { Link, useLoaderData } from "react-router-dom";
import { IPost } from "../types";
import { Spinner } from "../components/Spinner";

export const Blog: React.FC = () => {
  const posts = useLoaderData() as IPost[];

  if (!posts) {
    return <Spinner />;
  }

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

export const blogLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  return response.json();
};
