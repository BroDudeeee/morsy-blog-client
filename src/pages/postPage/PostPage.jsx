import { useEffect, useState } from "react";
import axios from "axios";
import "./PostPage.css";
import { useParams } from "react-router-dom";
import moment from "moment";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    body: "",
    createdAt: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}api/posts/post/${postId}`
      );
      const data = await res.data;
      const { title, body, createdAt, category } = data;
      setPost({
        title,
        body,
        createdAt,
        category,
      });
      setIsLoading(false);
    };
    getPost();
  }, [postId]);

  if (isLoading)
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );

  return (
    <article className="postPage">
      <span className="date">
        {moment(post.createdAt).format(`MMMM DD, YYYY`).toUpperCase()}{" "}
      </span>
      {post.category && (
        <>
          / <span className="category">#{post.category.toUpperCase()}</span>
        </>
      )}

      <h3 className="title">{post.title}</h3>
      <p className="body">{post.body}</p>
    </article>
  );
};

export default PostPage;
