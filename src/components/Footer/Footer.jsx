import "./Footer.scss";
import logo from "../../assets/logo-footer.svg";


function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__img"
        src={logo}
        alt="Logo du site Kasa"
      />

      <p className="footer__p">
        &copy; 2020 Kasa. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
