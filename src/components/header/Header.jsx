import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigators">
        <Link to={"/"} className="link">
          <h3 className="logo">MORSI NOTES</h3>
        </Link>
        <Link to={"/about"} className="link">
          <h3 className="about-me">ABOUT ME</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
