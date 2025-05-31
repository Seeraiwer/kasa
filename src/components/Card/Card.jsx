// Import du composant Link de React Router pour la navigation
import { Link } from "react-router-dom";

// Import du style associé à la carte
import "./Card.scss";

/**
 * Composant Card
 *
 * Représente une carte cliquable menant à la page d’un logement.
 * Elle affiche :
 * - une image de couverture
 * - un titre superposé dans un dégradé sombre
 *
 * Props :
 * @param {string} image - URL de l’image de couverture du logement
 * @param {string} title - Titre du logement (affiché en overlay)
 * @param {string} id - Identifiant unique pour créer l’URL de navigation
 */
function Card({ image, title, id }) {
  return (
    // Carte cliquable qui redirige vers la page du logement correspondant
    <Link to={`/logement/${id}`} className="card">
      {/* Image de couverture */}
      <img src={image} alt={title} className="card__image" />

      {/* Superposition avec le titre */}
      <div className="card__overlay">
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
