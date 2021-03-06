import twitterLogo from "../images/twitter.svg";
import fbLogo from "../images/fb.svg";
import igLogo from "../images/ig.svg";
import ytLogo from "../images/yt.svg";
import logo from "../images/logo_light.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <Link id="footer-logo-link" to="/">
        <img className="footer-logo" src={logo} alt="Logo" />
      </Link>

      <div id="footer-socials">
        <button id="footer-twitter" className="footer-social-wrapper">
          <img className="footer-social" src={twitterLogo} alt="Twitter" />
        </button>
        <button id="footer-ig" className="footer-social-wrapper">
          <img className="footer-social" src={igLogo} alt="Instagram" />
        </button>
        <button id="footer-yt" className="footer-social-wrapper">
          <img className="footer-social" src={ytLogo} alt="Youtube" />
        </button>
        <button id="footer-fb" className="footer-social-wrapper">
          <img className="footer-social" src={fbLogo} alt="Facebook" />
        </button>
      </div>
      <p>©Hwaiting Festival 2022</p>
    </footer>
  );
}
