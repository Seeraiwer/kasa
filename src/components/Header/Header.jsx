import { NavLink } from "react-router-dom";
import "./Header.scss";
export default function Header() {
  return (
    <header>
      <img src="../src/assets/header-logo.svg"></img>
      <nav>
        <ul>
          <li className="accueil">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li className="aPropos">
            <NavLink
              to="/a-propos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}