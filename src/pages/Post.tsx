import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../types";
import { Button } from "../components/Button";
import { Spinner } from "../components/Spinner";

export const Post: React.FC = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!post) {
    return <h1>Nothing to show</h1>;
  }

  return (
    <div className="contentWrapper">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Button text={"Go back"} />
    </div>
  );
};
