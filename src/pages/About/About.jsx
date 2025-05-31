import image from "@assets/about-background.png"; // Image d'arrière-plan pour la bannière
import Banner from "@components/Banner/Banner";    // Composant pour l’affichage du bandeau
import Collapse from "@components/Collapse/Collapse"; // Composant d'accordéon réutilisable
import "./About.scss"; // Feuille de style spécifique à cette page

/**
 * Composant de la page "À propos"
 * Affiche une bannière, suivie de plusieurs sections collapsibles
 * pour présenter les valeurs de l’entreprise.
 */
function About() {
  return (
    <section className="about">
      {/* Bannière d'en-tête sans ombre et sans texte */}
      <Banner image={image} alt="montagnes" shadow={false} />

      {/* Section "Fiabilité" */}
      <Collapse title="Fiabilité">
        <p>
          La qualité du service est au cœur de notre engagement chez Kasa.
          Nous veillons à ce que chaque interaction, que ce soit avec nos
          hôtes ou nos locataires, soit empreinte de respect et de
          bienveillance.
        </p>
      </Collapse>

      {/* Section "Respect" */}
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

      {/* Section "Service" */}
      <Collapse title="Service">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </Collapse>

      {/* Section "Sécurité" */}
      <Collapse title="Sécurité">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </Collapse>
    </section>
  );
}

export default About;
