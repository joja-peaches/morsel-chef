import { Link } from "react-router-dom";

import "./Footer.css";
import instagramLogo from "../../assets/branding/instagram-logo.svg";
import tiktokLogo from "../../assets/branding/tiktok-logo.svg";
import emailIcon from "../../assets/branding/email-icon.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <img src={instagramLogo} alt="Instagram Logo" className="footer__social-icon" />
                <img src={tiktokLogo} alt="TikTok Logo" className="footer__social-icon" />
                <img src={emailIcon} alt="Email Logo" className="footer__email-icon" />
            </div>
            <p className="footer__text">&copy; Morsel Chef 2025</p>
        </footer>
    );
}

export default Footer;