// Import du style spécifique à la bannière
import "./Banner.scss";

/**
 * Composant Banner
 *
 * Affiche une bannière avec :
 * - une image d’arrière-plan
 * - un texte superposé facultatif
 * - un effet d’ombre facultatif
 *
 * Props :
 * @param {string} image - URL de l’image à afficher
 * @param {string} alt - Texte alternatif pour l’accessibilité
 * @param {string} [text] - Texte à afficher par-dessus la bannière
 * @param {boolean} [shadow=true] - Active ou non une ombre portée
 */
function Banner({ image, alt, text, shadow = true }) {
  // Construction dynamique de la classe CSS selon les props
  const bannerClass = [
    "banner",                             // classe de base
    text ? "banner--opacity" : "",        // ajoute un fond foncé si du texte est présent
    shadow ? "banner--shadow" : ""        // ajoute une ombre si activée
  ]
    .filter(Boolean)                      // supprime les chaînes vides
    .join(" ");                           // assemble les classes avec des espaces

  return (
    <div className={bannerClass}>
      {/* Affiche l’image si elle est fournie */}
      {image && <img src={image} alt={alt} className="banner__image" />}

      {/* Affiche le texte superposé s’il est fourni */}
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
