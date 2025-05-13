import "./Banner.scss";

/**
 * Composant Banner — affiche une bannière avec image, texte superposé et effets visuels optionnels.
 *
 * @param {Object} props - Propriétés du composant.
 * @param {string} props.image - URL de l’image à afficher en arrière-plan.
 * @param {string} props.alt - Texte alternatif pour l’accessibilité.
 * @param {string} [props.text] - Texte superposé sur la bannière.
 * @param {boolean} [props.shadow=true] - Active ou non un effet d’ombre sur la bannière.
 *
 * @returns {JSX.Element} Élément JSX représentant une bannière stylisée.
 */
function Banner({ image, alt, text, shadow = true }) {
  // Construction dynamique des classes CSS en fonction des props
  const bannerClass = [
    "banner",
    text ? "banner--opacity" : "",   // Applique une opacité si du texte est présent
    shadow ? "banner--shadow" : ""   // Applique un effet d'ombre si activé
  ]
    .filter(Boolean) // Supprime les chaînes vides
    .join(" ");      // Concatène les classes CSS

  return (
    <div className={bannerClass}>
      {/* Affiche l’image uniquement si la prop `image` est définie */}
      {image && <img src={image} alt={alt} className="banner__image" />}

      {/* Affiche le texte superposé si présent */}
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
