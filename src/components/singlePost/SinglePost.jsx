import { Link } from "react-router-dom";
import moment from "moment";
import "./SinglePost.css";

const SinglePost = ({ _id, title, createdAt, category, image }) => {
  function arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <article className="singlePostContainer">
      <Link to={`post/${_id}`} className="link">
        <section className="singlePost">
          {image && (
            <img
              src={`data:${image.contentType};base64,${arrayBufferToBase64(
                image.data.data
              )}`}
              alt={title}
              className="postImg"
            />
          )}
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
