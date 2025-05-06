import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { NavLink } from "react-router-dom";
import "./Error.scss";

export default function Error() {
  return (
    <>
      <Header />
      <h1>404</h1>
      <p className="descriptionError">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <NavLink to="/">
        Retourner sur la page d’accueil
      </NavLink>
      <Footer />
    </>
  );
}