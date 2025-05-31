// Import des composants nécessaires
import Collapse from "@components/Collapse/Collapse";
import Rating from "@components/Rating/Rating";
import Slideshow from "@components/Slider/Slider";
import { useFetch } from "@hooks/useFetch.js";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Lodgment.scss";

// Chemin vers les données JSON des logements
const LOGEMENTS__PATH = "/data/logements.json";

/**
 * Composant Lodgment
 * Affiche la fiche détaillée d’un logement : images, infos, tags, collapses.
 */
function Lodgment() {
  const { id } = useParams(); // Récupère l’ID dans l’URL
  const navigate = useNavigate(); // Pour rediriger vers /404 si nécessaire

  // Récupération des données via le hook personnalisé
  const { loading, data: logements, error } = useFetch(LOGEMENTS__PATH);
  const [logement, setLogement] = useState(null);

  // Cherche le logement correspondant à l’ID ou redirige vers la 404
  useEffect(() => {
    if (logements) {
      const found = logements.find((l) => l.id === id);
      if (found) setLogement(found);
      else navigate("/404");
    }
  }, [logements, id, navigate]);

  // Gestion du chargement ou des erreurs
  if (loading) return <div className="loader" aria-label="Chargement..."></div>;
  if (error)   return <div className="error">Erreur : {error.message}</div>;
  if (!logement) return null;

  return (
    <section className="estate">
      <div className="spacer">
        {/* Carrousel d’images du logement */}
        <Slideshow images={logement.pictures} title={logement.title} />

        {/* Ligne contenant le titre, la localisation, l’hôte et la note */}
        <div className="header-info">
          {/* Titre + ville (gauche) */}
          <div className="title-location">
            <h1 className="estate-title">{logement.title}</h1>
            <p className="estate-location">{logement.location}</p>
          </div>

          {/* Informations sur l’hôte (droite) */}
          <div className="host-block">
            <div className="host-main">
              <p className="host-name">{addBrToString(logement.host.name)}</p>
              <img
                className="host-img"
                src={logement.host.picture}
                alt={`Hôte : ${logement.host.name}`}
              />
            </div>
            {/* Note sous forme d’étoiles */}
            <Rating className="host-rating" rating={logement.rating} />
          </div>
        </div>

        {/* Affichage des tags */}
        <div className="tags">
          {logement.tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>

        {/* Sections déroulantes (description + équipements) */}
        <div className="collapses">
          <Collapse title="Description">{logement.description}</Collapse>
          <Collapse title="Équipements">
            {logement.equipments.map((eq, i) => (
              <p key={i}>{eq}</p>
            ))}
          </Collapse>
        </div>
      </div>
    </section>
  );
}

/**
 * Fonction utilitaire :
 * Insère un saut de ligne entre chaque mot d’un nom complet (ex: "Jane Doe")
 */
function addBrToString(name) {
  return name.split(" ").map((word, i, arr) => (
    <React.Fragment key={i}>
      {word}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}

export default Lodgment;
