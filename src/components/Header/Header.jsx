import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/header-logo.svg";
import "./Header.scss";

/**
 * Composant Header — affiche le logo et la navigation principale du site.
 */
function Header() {
  return (
    <header className="header">
      <div className="spacer">
        {/* Logo renvoyant vers la page d’accueil */}
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="Logo de Kasa" className="header__logo" />
        </Link>

        {/* Barre de navigation */}
        <nav>
          <ul className="header__nav">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                À propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
