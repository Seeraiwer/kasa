// Importation du fichier de styles pour le footer
import "./Footer.scss";

// Importation du logo spécifique au pied de page
import logo from "../../assets/logo-footer.svg";

/**
 * Composant Footer
 *
 * Affiche le pied de page du site contenant :
 * - le logo Kasa en version blanche
 * - un texte de droits d’auteur
 */
function Footer() {
  return (
    <footer className="footer">
      {/* Logo du site affiché dans le footer */}
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
