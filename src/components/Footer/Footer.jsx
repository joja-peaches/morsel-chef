import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://www.facebook.com/morselchef/">
          <div className="footer__social-icon-facebook" />
        </a>
        <a href="https://www.instagram.com/morsel_chef/" target="_blank">
          <div className="footer__social-icon-instagram" />
        </a>
        <a href="https://www.tiktok.com/@missmegs00" target="_blank">
          <div className="footer__social-icon-tiktok" />
        </a>
      </div>
      <p className="footer__text">
        <span className="footer__text-copyright">&copy;</span> Morsel Chef 2025
      </p>
    </footer>
  );
}

export default Footer;
