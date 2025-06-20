import "./Header.css";
import logo from "../../assets/branding/morsel-large-logo-dark.svg";

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Morsel Logo" className="header__logo" />
        <button className="header__button">ABOUT About</button>
    </header>
  );
}

export default Header;
