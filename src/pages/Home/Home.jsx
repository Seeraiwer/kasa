// Import de l’image pour la bannière d’accueil
import image from "@assets/home-banner.png";

// Import des composants réutilisables
import Banner from "@components/Banner/Banner";
import Card from "@components/Card/Card";

// Hook personnalisé pour récupérer les données de logements
import { useFetch } from "@hooks/useFetch.js";

// Feuille de style dédiée à la page d’accueil
import "./Home.scss";

// Chemin du fichier JSON contenant les données de logements
const LOGEMENTS__PATH = "/data/logements.json";

/**
 * Composant principal de la page d’accueil.
 * Il affiche une bannière et une grille de cartes de logements.
 */
function Home() {
  // Chargement des données de logements avec le hook personnalisé
  const { loading, data: logements, error } = useFetch(LOGEMENTS__PATH);

  return (
    <section className="home">
      {/* Conteneur avec marges internes */}
      <div className="spacer">
        {/* Section de la bannière d’accueil */}
        <div className="home__banner">
          <Banner
            image={image}
            alt="Vue sur la mer"
            text="Chez vous, partout et ailleurs"
          />
        </div>

        {/* Grille des cartes de logements */}
        <div className="home__grid">
          {/* Affiche un loader pendant le chargement */}
          {loading && (
            <div className="loader" aria-label="Chargement en cours..."></div>
          )}

          {/* Message si aucun logement n’est disponible */}
          {!loading && logements?.length === 0 && (
            <div>Il n'y a aucun logement à afficher.</div>
          )}

          {/* Affiche l’erreur en cas d’échec du chargement */}
          {error && (
            <div className="error" role="alert">
              Erreur : {error.message}
            </div>
          )}

          {/* Affiche chaque logement sous forme de carte */}
          {logements?.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              image={logement.cover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
