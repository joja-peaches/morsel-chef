import "./Header.css";
import logo from "../../assets/branding/morsel-large-logo-dark.svg";
import hamburger from "../../assets/branding/hamburger.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Morsel Logo" className="header__logo" />
      <nav className="header__navigation">
        <button className="header__navigation-button">ABOUT</button>
        <button className="header__navigation-button">SERVICES</button>
        <button className="header__navigation-button">MENU</button>
        <button className="header__navigation-button">FAQ</button>
        <button className="header__navigation-button">CONTACT</button>
      </nav>
      <img src={hamburger} className="header__hamburger" />
    </header>
  );
}

export default Header;
