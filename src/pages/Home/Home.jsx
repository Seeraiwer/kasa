import image from "@assets/home-banner.png";
import Banner from "@components/Banner/Banner";
import Card from "@components/Card/Card";
import { useFetch } from "@hooks/useFetch.js";
import "./Home.scss";

// Chemin vers le fichier JSON des logements
const LOGEMENTS__PATH = "/data/logements.json";

/**
 * Page d’accueil — affiche une bannière et la liste des logements sous forme de cartes.
 *
 * Utilise le hook useFetch pour récupérer les données.
 *
 * @returns {JSX.Element} La page d'accueil de l'application.
 */
function Home() {
  const { loading, data: logements, error } = useFetch(LOGEMENTS__PATH);

  return (
    <main>
      <section className="home">
        {/* Bannière principale avec texte */}
        <Banner
          image={image}
          alt="mer"
          text="Chez vous, partout et ailleurs"
        />

        {/* Grille de logements */}
        <div className="home__grid">
          {/* Affiche un loader si les données sont en cours de chargement */}
          {loading && <div className="loader" aria-label="Chargement en cours..."></div>}

          {/* Message si aucune donnée reçue mais pas d’erreur */}
          {!loading && logements && logements.length === 0 && (
            <div>Il n'y a aucun logement à afficher.</div>
          )}

          {/* Affichage de l’erreur réseau si présente */}
          {error && (
            <div className="error" role="alert">
              Erreur : {error.message}
            </div>
          )}

          {/* Mapping des données en cartes */}
          {logements &&
            logements.map((logement) => (
              <Card
                key={logement.id}
                id={logement.id}
                title={logement.title}
                image={logement.cover}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
