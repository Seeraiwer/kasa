import { Link } from "react-router-dom"; // Permet de créer un lien de navigation sans rechargement
import "./Error404.scss"; // Feuille de style dédiée à la page 404

/**
 * Composant pour la page d’erreur 404.
 * Affiche un message simple avec un lien pour revenir à la page d’accueil.
 */
function Error404() {
  return (
    <section
      className="error404"
      aria-labelledby="error-title"        // Accessibilité : identifiant du titre
      aria-describedby="error-message"    // Accessibilité : identifiant du message
    >
      {/* Titre de l’erreur */}
      <h1 id="error-title">404</h1>

      {/* Message d'erreur */}
      <p id="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>

      {/* Lien de retour à la page d’accueil */}
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}

export default Error404;
