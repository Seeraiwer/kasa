import { Link } from "react-router-dom";
import "./Card.scss";

/**
 * Composant Card — représente une carte cliquable avec image et titre,
 * redirigeant vers une page de détail du logement.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.image - URL de l’image à afficher dans la carte.
 * @param {string} props.title - Titre du logement affiché sur la carte.
 * @param {string} props.id - Identifiant du logement utilisé pour construire l’URL de redirection.
 *
 * @returns {JSX.Element} Une carte cliquable contenant une image et un titre.
 */
function Card({ image, title, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div className="card__content">
        {/* Affiche l’image si définie */}
        {image && <img src={image} alt={title} className="card__image" />}

        {/* Titre du logement */}
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
