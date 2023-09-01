import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../types";
import { Button } from "../components/Button";

export const Post: React.FC = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);

  if (!post) {
    return <h1>Nothing to show</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Button text={"Go back"} />
    </div>
  );
};
