import { Link } from "react-router-dom";
import moment from "moment";
import "./SinglePost.css";

const SinglePost = ({ _id, title, body, createdAt, category, image }) => {
  return (
    <article className="singlePostContainer">
      <Link to={`post/${_id}`} className="link">
        <section className="singlePost">
          {image && <img src={image} alt={title} className="postImg" />}
          <section className="postTitleBody">
            {category && <span className="category">#{category}</span>}
            <h3 className="title">{title}</h3>
            <span className="date">
              {moment(createdAt).format(`MMMM DD, YYYY`)}
            </span>
          </section>
        </section>
      </Link>
    </article>
  );
};

export default SinglePost;
