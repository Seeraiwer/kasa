import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ image, title, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={image} alt={title} className="card__image" />

      <div className="card__overlay">
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
