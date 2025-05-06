// src/pages/Home/Home.jsx
import logements from "../../data/logements.json";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import bannerImage from "../../assets/home-banner.png";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <div className="home__grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.titre}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
