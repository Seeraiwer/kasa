import { Link } from "react-router-dom";
import "./Error404.scss";

function Error404() {
  return (
    <section
      className="error404"
      aria-labelledby="error-title"
      aria-describedby="error-message"
    >
      <h1 id="error-title">404</h1>

      <p id="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}

export default Error404;
