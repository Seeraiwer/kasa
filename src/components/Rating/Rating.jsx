import "./Rating.scss";

/**
 * Composant Rating — affiche une note sous forme de 5 étoiles,
 * dont un certain nombre sont pleines en fonction de la note fournie.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.rating - Nombre d’étoiles pleines à afficher (entre 0 et 5).
 *
 * @returns {JSX.Element} Un composant visuel représentant une note.
 */
function Rating({ rating }) {
  const stars = [];

  // Génère les 5 étoiles en fonction de la note
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-solid fa-star ${i < rating ? "star-full" : "star-empty"}`}
        aria-hidden="true"
      />
    );
  }

  return <div className="rating" aria-label={`Note : ${rating} sur 5`}>{stars}</div>;
}

export default Rating;
