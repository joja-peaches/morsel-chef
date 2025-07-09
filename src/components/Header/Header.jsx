import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/branding/morsel-large-logo-dark.svg";
import hamburger from "../../assets/branding/hamburger.svg";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="Morsel Logo"
        className="header__logo"
      />
      <nav className="header__navigation">
        <button
          onClick={() => navigate("/about")}
          className="header__navigation-button"
        >
          ABOUT
        </button>
        <button
          onClick={() => navigate("/services")}
          className="header__navigation-button"
        >
          SERVICES
        </button>
        <button
          onClick={() => navigate("/menu")}
          className="header__navigation-button"
        >
          MENU
        </button>
        <button
          onClick={() => navigate("/faq")}
          className="header__navigation-button"
        >
          FAQ
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="header__navigation-button"
        >
          CONTACT
        </button>
      </nav>
      <img src={hamburger} className="header__hamburger" />
    </header>
  );
}

export default Header;
