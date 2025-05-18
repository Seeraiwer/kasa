import { Link } from "react-router-dom";
import "./Card.scss";

/**
 * Composant Card — carte avec image et titre superposé, redirigeant vers la page de logement.
 */
function Card({ image, title, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      {/* Image de fond */}
      <img src={image} alt={title} className="card__image" />

      {/* Overlay noir avec texte */}
      <div className="card__overlay">
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
