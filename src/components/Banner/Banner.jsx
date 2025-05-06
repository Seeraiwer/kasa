// src/components/Banner/Banner.jsx
import "./Banner.scss";

const Banner = ({ image, title }) => {
  return (
    <div className="banner">
      <img src={image} alt={title} className="banner__image" />
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

export default Banner;
