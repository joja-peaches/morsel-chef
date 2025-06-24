import "./Footer.css";
import instagramLogo from "../../assets/branding/instagram-logo.svg";
import tiktokLogo from "../../assets/branding/tiktok-logo.svg";
import facebookLogo from "../../assets/branding/facebook-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://www.facebook.com/morselchef/">
          <img
            src={facebookLogo}
            alt="Facebook Logo"
            className="footer__social-icon"
          />
        </a>
        <a href="https://www.instagram.com/morsel_chef/" target="_blank">
          <img
            src={instagramLogo}
            alt="Instagram Logo"
            className="footer__social-icon"
          />
        </a>
        <a href="https://www.tiktok.com/@missmegs00" target="_blank">
          <img
            src={tiktokLogo}
            alt="TikTok Logo"
            className="footer__social-icon"
          />
        </a>
      </div>
      <p className="footer__text">&copy; Morsel Chef 2025</p>
    </footer>
  );
}

export default Footer;
