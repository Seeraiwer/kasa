import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/header-logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      {/* Ajout de spacer ici */}
      <div className="spacer header__wrapper">
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="Logo de Kasa" className="header__logo" />
        </Link>

        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className="header__nav-link header__nav-link--accueil"
          >
            <span>Accueil</span>
          </NavLink>

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
