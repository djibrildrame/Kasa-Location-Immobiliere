import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../logement/Logement.scss";
import data from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faStar } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const logement = data.find((item) => item.id === id); // Trouver le logement correspondant

  const [activeIndex, setActiveIndex] = useState(0); // État pour gérer l'index actif

  if (!logement) {
    return <h1>Logement introuvable</h1>; // Message si l'ID est invalide
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="main-container">
      <div className="carousel">
        {/* Images */}
        <div className="carousel-container">
          {logement.pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`Slide ${index + 1}`}
              className="banner-img"
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            />
          ))}
        </div>

        {/* Flèches pour naviguer */}
        <div className={`arrow ${logement.pictures.length > 1 ? 'visible' : 'hidden'}`}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prevSlide}
            className="arrow-left"
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={nextSlide}
            className="arrow-right"
          />
        </div>

        {/* Indicateur de numéro d'image */}
        <div className={`slide-counter ${logement.pictures.length > 1 ? 'visible' : 'hidden'}`}>
          {activeIndex + 1}/{logement.pictures.length}
        </div>
      </div>

      {/* Informations supplémentaires sur le logement */}
      <div className="oeuvre">
        <div className="title-container">
          <div className="appartement">
            <h1 className="titre">{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <div className="container-tag">
              {logement.tags.map((tag, index) => (
                <h3 key={index} className="tag">
                  {tag}
                </h3>
              ))}
            </div>
          </div>
        </div>

        {/* Informations sur l'hôte et étoiles */}
        <div className="presentation">
          <div className="auteur">
            <div className="identite">
              <p className="prenom">
                {logement.host.name.split(" ")[0]}
              </p>
              <br />
              <p className="nom">
                {logement.host.name.split(" ")[1]}
              </p>
            </div>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="cercle"
            />
          </div>

          {/* Évaluation avec étoiles */}
          <div className="star">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={index < parseInt(logement.rating) ? "orange" : "gris"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;