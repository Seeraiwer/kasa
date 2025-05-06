import "./Footer.scss";
import logo from "../../assets/logo-footer.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className="footer-text">@ 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;