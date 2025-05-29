import { useRef, useState } from "react";
import "./Slider.scss";

function Slideshow({ images, title }) {
  const [index, setIndex] = useState(0);
  const refImages = useRef(null);

  const indexPrev = (index - 1 + images.length) % images.length;
  const indexNext = (index + 1) % images.length;

  function changeSlide(newIndex) {
    refImages.current.style.transition = "transform 0.5s ease-in-out";
    refImages.current.style.transform = newIndex < index
      ? "translateX(100%)"
      : "translateX(-100%)";

    setTimeout(() => {
      refImages.current.style.transition = "none";
      if (newIndex < 0) {
        setIndex(images.length - 1);
      } else if (newIndex >= images.length) {
        setIndex(0);
      } else {
        setIndex(newIndex);
      }
      refImages.current.style.transform = "translateX(0)";
    }, 500);
  }

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button className="slide-prev" onClick={() => changeSlide(index - 1)} aria-label="Image précédente">
            <i className="material-icons icon">arrow_back_ios</i>
          </button>
          <button className="slide-next" onClick={() => changeSlide(index + 1)} aria-label="Image suivante">
            <i className="material-icons icon">arrow_forward_ios</i>
          </button>
        </>
      )}

      <div className="images" ref={refImages}>
        {images.length > 1 && (
          <img
            key={indexPrev}
            src={images[indexPrev]}
            alt={`${title} ${indexPrev + 1}`}
          />
        )}

        <img
          key={index}
          src={images[index]}
          alt={`${title} ${index + 1}`}
        />

        {images.length > 1 && (
          <img
            key={indexNext !== indexPrev ? indexNext : -1}
            src={images[indexNext]}
            alt={`${title} ${indexNext + 1}`}
          />
        )}
      </div>

      {images.length > 1 && (
        <p className="slide-index">
          {index + 1}/{images.length}
        </p>
      )}
    </div>
  );
}

export default Slideshow;
