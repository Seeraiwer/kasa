import { Link } from "react-router-dom";
import "./Error404.scss";

/**
 * Composant Error404 — affiché lorsqu’une route invalide est appelée.
 *
 * Affiche un message d'erreur 404 et un lien de retour à la page d’accueil.
 *
 * @returns {JSX.Element} Une page d’erreur utilisateur.
 */
function Error404() {
  return (
    <main>
      <section className="error404" aria-labelledby="error-title" aria-describedby="error-message">
        {/* Code d'erreur */}
        <h1 id="error-title">404</h1>

        {/* Message explicatif */}
        <p id="error-message">
          Oups! La page que vous demandez n'existe pas.
        </p>

        {/* Lien de retour vers la page d’accueil */}
        <Link to="/">Retourner sur la page d’accueil</Link>
      </section>
    </main>
  );
}

export default Error404;
