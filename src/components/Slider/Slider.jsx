import { useRef, useState } from "react";
import "./Slider.scss";

/**
 * Composant Slideshow
 *
 * Affiche un carrousel d'images avec navigation (précédent / suivant)
 * et animation de transition gauche/droite.
 */
function Slideshow({ images, title }) {
  // État local pour suivre l'index actuel de l'image affichée
  const [index, setIndex] = useState(0);

  // Référence DOM pour manipuler la position du conteneur d'images
  const refImages = useRef(null);

  // Calculs des index précédents et suivants (avec effet circulaire)
  const indexPrev = (index - 1 + images.length) % images.length;
  const indexNext = (index + 1) % images.length;

  /**
   * Fonction de changement d’image avec animation
   * - Animation vers la gauche ou la droite selon la direction
   * - Réinitialisation après animation pour effet fluide
   */
  function changeSlide(newIndex) {
    // Appliquer l'animation de transition
    refImages.current.style.transition = "transform 0.5s ease-in-out";
    refImages.current.style.transform = newIndex < index
      ? "translateX(100%)"
      : "translateX(-100%)";

    // Attendre l'animation avant de mettre à jour l'état
    setTimeout(() => {
      refImages.current.style.transition = "none";

      // Gérer les extrémités du carrousel
      if (newIndex < 0) {
        setIndex(images.length - 1);
      } else if (newIndex >= images.length) {
        setIndex(0);
      } else {
        setIndex(newIndex);
      }

      // Réinitialiser la position
      refImages.current.style.transform = "translateX(0)";
    }, 500);
  }

  return (
    <div className="slideshow">
      {/* Flèches de navigation si plus d'une image */}
      {images.length > 1 && (
        <>
          <button
            className="slide-prev"
            onClick={() => changeSlide(index - 1)}
            aria-label="Image précédente"
          >
            <i className="material-icons icon">arrow_back_ios</i>
          </button>

          <button
            className="slide-next"
            onClick={() => changeSlide(index + 1)}
            aria-label="Image suivante"
          >
            <i className="material-icons icon">arrow_forward_ios</i>
          </button>
        </>
      )}

      {/* Conteneur des images avec effet de transition */}
      <div className="images" ref={refImages}>
        {/* Image précédente (hors écran gauche) */}
        {images.length > 1 && (
          <img
            key={indexPrev}
            src={images[indexPrev]}
            alt={`${title} ${indexPrev + 1}`}
          />
        )}

        {/* Image actuelle (centrée) */}
        <img
          key={index}
          src={images[index]}
          alt={`${title} ${index + 1}`}
        />

        {/* Image suivante (hors écran droite) */}
        {images.length > 1 && (
          <img
            key={indexNext !== indexPrev ? indexNext : -1}
            src={images[indexNext]}
            alt={`${title} ${indexNext + 1}`}
          />
        )}
      </div>

      {/* Indicateur de position (ex: 2/5) */}
      {images.length > 1 && (
        <p className="slide-index">
          {index + 1}/{images.length}
        </p>
      )}
    </div>
  );
}

export default Slideshow;
