import { Link } from "react-router-dom";
import moment from "moment";
import "./SinglePost.css";

const SinglePost = ({ _id, title, body, createdAt }) => {
  return (
    <article className="singlePost">
      <Link to={`post/${_id}`} className="link">
        <h3 className="title">{title}</h3>
        <p className="body">
          {body.length > 200 ? `${body.slice(0, 200)}....` : body}
        </p>
      </Link>
      <span className="date">{moment(createdAt).format(`MMMM DD, YYYY`)}</span>
    </article>
  );
};

export default SinglePost;
