import Collapse from "@components/Collapse/Collapse";
import Rating from "@components/Rating/Rating";
import Slideshow from "@components/Slider/Slider";
import { useFetch } from "@hooks/useFetch.js";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Lodgment.scss";

const LOGEMENTS__PATH = "/data/logements.json";

function Lodgment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, data: logements, error } = useFetch(LOGEMENTS__PATH);
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    if (logements) {
      const found = logements.find((l) => l.id === id);
      if (found) {
        setLogement(found);
      } else {
        navigate("/404");
      }
    }
  }, [logements, id, navigate]);

  if (loading) return <div className="loader" aria-label="Chargement..."></div>;
  if (error)   return <div className="error">Erreur : {error.message}</div>;
  if (!logement) return null;

  return (
    <section className="estate">
      {/* ← On ajoute le même wrapper "spacer" que sur Home */}
      <div className="spacer">
        {/* Carrousel d’images */}
        <Slideshow images={logement.pictures} title={logement.title} />

        {/* Infos principales */}
        <div className="container">
          <div className="left">
            <h1 className="estate-title">{logement.title}</h1>
            <p className="estate-location">{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="right">
            {/* Hôte */}
            <div className="host">
              <p>{addBrToString(logement.host.name)}</p>
              <img
                src={logement.host.picture}
                alt={`Hôte : ${logement.host.name}`}
              />
            </div>
            {/* Note en étoiles */}
            <Rating rating={logement.rating} />
          </div>
        </div>

        {/* Collapses */}
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

function addBrToString(name) {
  return name.split(" ").map((word, i, arr) => (
    <React.Fragment key={i}>
      {word}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}

export default Lodgment;
