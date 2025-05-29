import "./Rating.scss";

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
