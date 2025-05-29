import image from "@assets/home-banner.png";
import Banner from "@components/Banner/Banner";
import Card from "@components/Card/Card";
import { useFetch } from "@hooks/useFetch.js";
import "./Home.scss";

const LOGEMENTS__PATH = "/data/logements.json";

function Home() {
  const { loading, data: logements, error } = useFetch(LOGEMENTS__PATH);

  return (
    <main>
      <section className="home">
        {/* Wrapper commun pour bannière et grille */}
        <div className="spacer">
          {/* Bannière de bienvenue */}
          <div className="home__banner">
            <Banner
              image={image}
              alt="Vue sur la mer"
              text="Chez vous, partout et ailleurs"
            />
          </div>

          {/* Grille de logements */}
          <div className="home__grid">
            {loading && (
              <div className="loader" aria-label="Chargement en cours..."></div>
            )}

            {!loading && logements?.length === 0 && (
              <div>Il n'y a aucun logement à afficher.</div>
            )}

            {error && (
              <div className="error" role="alert">
                Erreur : {error.message}
              </div>
            )}

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
    </main>
  );
}

export default Home;
