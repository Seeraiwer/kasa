import Collapse from "@components/Collapse/Collapse";
import Rating from "@components/Rating/Rating";
import Slideshow from "@components/Slider/Slider";
import { useFetch } from "@hooks/useFetch.js";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Lodgment.scss";

const LOGEMENTS__PATH = "/data/logements.json";


function Lodgment() {
  const { id } = useParams(); // Récupère l'identifiant dans l'URL
  const navigate = useNavigate();
  const { loading, data: logements, error } = useFetch(LOGEMENTS__PATH);
  const [logement, setLogement] = useState(null);

  // Recherche du logement correspondant une fois les données chargées
  useEffect(() => {
    if (logements) {
      const foundLogement = logements.find((logement) => logement.id === id);
      if (foundLogement) {
        setLogement(foundLogement);
      } else {
        navigate("/404"); // Redirection vers page 404 si logement introuvable
      }
    }
  }, [logements, id, navigate]);

  if (loading) return <div className="loader" aria-label="Chargement..."></div>;
  if (error) return <div className="error">Erreur : {error.message}</div>;
  if (!logement) return null;

  return (
    <main>
      <section className="estate">
        {/* Carrousel d’images du logement */}
        <Slideshow images={logement.pictures} title={logement.title} />

        {/* Informations principales du logement */}
        <div className="container">
          <div className="left">
            <h1 className="estate-title">{logement.title}</h1>
            <p className="estate-location">{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="right">
            {/* Informations sur l'hôte avec nom sur plusieurs lignes */}
            <div className="host">
              <p>{addBrToString(logement.host.name)}</p>
              <img src={logement.host.picture} alt={`Hôte : ${logement.host.name}`} />
            </div>

            {/* Affichage de la note en étoiles */}
            <Rating rating={logement.rating} />
          </div>
        </div>

        {/* Sections repliables (description + équipements) */}
        <div className="collapses">
          <Collapse title="Description">{logement.description}</Collapse>
          <Collapse title="Équipements">
            {logement.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          </Collapse>
        </div>
      </section>
    </main>
  );
}


function addBrToString(string) {
  return string.split(" ").map((word, index, array) => (
    <React.Fragment key={index}>
      {word}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
}

export default Lodgment;