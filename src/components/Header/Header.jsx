import "./Header.css";
import logo from "../../assets/branding/morsel-large-logo-dark.svg";
// import logo from "../../assets/branding/morsel-large-logo-light.png";
// import logo from "../../assets/branding/morsel-fork-logo-snipped.svg";

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
    </header>
  );
}

export default Header;
