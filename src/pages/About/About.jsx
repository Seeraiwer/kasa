import image from "@assets/about-background.png";
import Banner from "@components/Banner/Banner";
import Collapse from "@components/Collapse/Collapse";
import "./About.scss";

/**
 * Page À propos — présente les valeurs fondamentales de Kasa sous forme de sections déroulantes.
 *
 * @returns {JSX.Element} La page "À propos" complète.
 */
function About() {
  return (
    <main>
      <section className="about">
        {/* Bannière sans ombre (plus sobre pour la page institutionnelle) */}
        <Banner image={image} alt="montagnes" shadow={false} />

        {/* Liste des valeurs sous forme de sections repliables */}
        <Collapse title="Fiabilité">
          <p>
            La qualité du service est au cœur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l’hôte qu’au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
      </section>
    </main>
  );
}

export default About;
