import "./Header.css";
import logo from "../../assets/branding/morsel-fork-logo-large.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Morsel Logo" className="header__logo" />
      <div className="header__navigation-container">
        <button className="header__button">About</button>
        <button className="header__button">Services</button>
        <button className="header__button">Contact</button>
      </div>
    </header>
  );
}

export default Header;
