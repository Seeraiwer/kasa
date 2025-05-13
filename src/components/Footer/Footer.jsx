import "./Footer.scss";
import logo from "../../assets/logo-footer.svg";

/**
 * Composant Footer — affiche le logo de Kasa et un message de copyright.
 *
 * @returns {JSX.Element} Élément JSX représentant le pied de page du site.
 */
function Footer() {
  return (
    <footer className="footer">
      {/* Logo du site */}
      <img
        className="footer__img"
        src={logo}
        alt="Logo du site Kasa"
      />

      {/* Texte de copyright */}
      <p className="footer__p">
        &copy; 2020 Kasa. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
