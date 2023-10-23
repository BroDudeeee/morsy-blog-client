import "./About.css";
import { Link } from "react-router-dom";
import img from "../../assets/aboutMe.jpeg";

const About = () => {
  return (
    <article className="about">
      <Link to={"/"} className="link">
        <h4 className="homeLink">BACK HOME</h4>
      </Link>
      <section>
        <section className="imgContainer">
          <img src={img} alt="me" className="aboutImg" />
        </section>

        <section className="aboutParagraph">
          <h3>HI, I'M AHMED MORSI</h3>
          <p>
            i'm your host, Ahmed Morsi, Software engineer, I built this blog
            pretty much for selfish reasons that is i found my self doing a lot
            of things and losing track of them so i decided to built this blog
            just to keep track of my learnings and make it as an archive to get
            back to it whenever i needed, but it is gonna be great if somebody
            found anything interesting in this site
          </p>
        </section>
      </section>
    </article>
  );
};

export default About;
