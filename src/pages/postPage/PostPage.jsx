import { useEffect, useState } from "react";
import axios from "axios";
import "./PostPage.css";
import { useParams } from "react-router-dom";
import moment from "moment";
import Header from "../../components/header/Header";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    body: "",
    createdAt: "",
    category: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}api/posts/post/${postId}`
      );
      const data = await res.data;
      const { title, body, image, createdAt, category } = data;
      setPost({
        title,
        body,
        image,
        createdAt,
        category,
      });
      setIsLoading(false);
    };
    getPost();
  }, []);

  if (isLoading)
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  console.log(post);
  return (
    <>
      <Header />
      <article className="postPage">
        <section className="dateCategory">
          <span className="postDate">
            {moment(post.createdAt).format(`MMMM DD, YYYY`).toUpperCase()}{" "}
          </span>
          {post.category && (
            <>
              / <span className="category">#{post.category.toUpperCase()}</span>
            </>
          )}
        </section>
        <h3 className="postPageTitle">{post.title}</h3>
        <img src={post.image} alt={post.title} className="postPageImg" />
        <p
          className="postPageBody"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>
    </>
  );
};

export default PostPage;
