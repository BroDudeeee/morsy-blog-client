import { Link } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = ({ id, title, body }) => {
  return (
    <article className="singlePost">
      <Link to={`post/${id}`} className="link">
        <h3 className="title">{title}</h3>
        <p className="body">{body}</p>
      </Link>
      <span className="date">1 day ago</span>
    </article>
  );
};

export default SinglePost;
