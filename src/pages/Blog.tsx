import { Link, useLoaderData, Await, useAsyncValue } from "react-router-dom";
import { IPost } from "../types";
import { Suspense } from "react";
import { Spinner } from "../components/Spinner";

const Posts = () => {
  const posts = useAsyncValue() as IPost[];

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export const Blog: React.FC = () => {
  const posts = useLoaderData() as IPost[];

  return (
    <div>
      <h1>Blog</h1>
      <Suspense fallback={<Spinner />}>
        <Await resolve={posts} children={() => <Posts />} />
      </Suspense>
    </div>
  );
};

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return posts;
}

export const blogLoader = async () => {
  const posts = await getPosts();

  return posts;
};
