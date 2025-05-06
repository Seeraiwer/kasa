// src/pages/Lodgment/Lodgment.jsx
import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";

const Lodgment = () => {
  const { id } = useParams();

  // Recherche du logement correspondant
  const logement = logements.find((item) => item.id === id);

  // Si aucun logement trouvé, rediriger vers la page d’erreur
  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <section>
      <h1>{logement.titre}</h1>
      <p>{logement.localisation}</p>
      <img
        src={logement.cover}
        alt={`Illustration du logement ${logement.titre}`}
        style={{ width: "100%", maxWidth: "600px" }}
      />
      <p>{logement.description}</p>
      <ul>
        {logement.equipements.map((equipement, index) => (
          <li key={index}>{equipement}</li>
        ))}
      </ul>
    </section>
  );
};

export default Lodgment;
