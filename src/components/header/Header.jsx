import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ColorContext } from "../../App";
import lightImg from "../../assets/brightness.png";
import darkImg from "../../assets/night-mode.png";

const Header = () => {
  const { isDark, setIsDark } = useContext(ColorContext);

  const toggleMode = () => {
    setIsDark(!isDark);
    localStorage.setItem("mode", !isDark ? "dark" : "light");
  };

  return (
    <header className={`header ${isDark ? "dark" : "light"}`}>
      <nav className="navigators">
        <Link to={"/"} className="link">
          <h3 className="logo">MORSI NOTES</h3>
        </Link>
        <section className="right">
          <Link to={"/about"} className="link">
            <h3 className="about-me">ABOUT ME</h3>
          </Link>
          <img
            src={isDark ? lightImg : darkImg}
            alt="dark mode"
            onClick={toggleMode}
            className="modeToggle"
          />
        </section>
      </nav>
    </header>
  );
};

export default Header;
