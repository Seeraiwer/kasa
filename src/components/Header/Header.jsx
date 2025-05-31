// Importation des composants nécessaires depuis react-router-dom
import { Link, NavLink } from "react-router-dom";

// Importation du logo du site
import logo from "../../assets/header-logo.svg";

// Importation du fichier de styles spécifique au Header
import "./Header.scss";

/**
 * Composant Header
 *
 * Affiche l'en-tête du site avec :
 * - le logo cliquable redirigeant vers l'accueil
 * - la barre de navigation (Accueil, À propos)
 */
function Header() {
  return (
    <header className="header">
      {/* Conteneur avec classe spacer pour centrage et contraintes de largeur */}
      <div className="spacer header__wrapper">
        {/* Logo Kasa cliquable, redirige vers la page d’accueil */}
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="Logo de Kasa" className="header__logo" />
        </Link>

        {/* Barre de navigation */}
        <nav className="header__nav">
          {/* Lien vers l’accueil avec activation spécifique sur la page exacte "/" */}
          <NavLink
            to="/"
            end
            className="header__nav-link header__nav-link--accueil"
          >
            <span>Accueil</span>
          </NavLink>

          {/* Lien vers la page À propos */}
          <NavLink
            to="/about"
            className="header__nav-link header__nav-link--apropos"
          >
            <span>À propos</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
