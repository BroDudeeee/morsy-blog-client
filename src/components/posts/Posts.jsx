import { useEffect, useState } from "react";
import axios from "axios";
import SinglePost from "../singlePost/SinglePost";
import "./Posts.css";
import loadingImg from "../../assets/loading.svg";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}api/posts/page/${pageNum}`
      );
      const data = await res.data;
      setPosts([...posts, ...data]);

      setIsLoading(false);
    };
    getPosts();
  }, [pageNum]);

  {
    if (isLoading)
      return (
        <div className="loading">
          <img src={loadingImg} alt="Loading" className="loadingImg posts" />
        </div>
      );
  }

  return (
    <section className="posts">
      {posts.map((post) => (
        <SinglePost key={post._id} {...post} />
      ))}

      <div className="loadMore">
        <button className="loadMoreBtn" onClick={() => setPageNum(pageNum + 1)}>
          Load More Articles
        </button>
      </div>
    </section>
  );
};

export default Posts;
