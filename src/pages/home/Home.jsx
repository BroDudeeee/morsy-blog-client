import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="postsContainer">
        <Posts />
      </section>
    </div>
  );
};

export default Home;
