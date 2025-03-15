import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Pour récupérer l'ID depuis l'URL
import HeaderLog from "../headerfooter/HeaderLog";
import "../logement/Logement.scss";
import Slider from "./Slider";
import CollapseLog from "./CollapseLog";
import data from "../data.json";
import Footer from "../logement/FooterLog";


const Logement = () => {
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
  const logement = data.find((item) => item.id === id); // Recherche le logement correspondant

  const [openCollapse, setOpenCollapse] = useState(null); // État pour gérer quel collapse est ouvert

  const toggleCollapse = (index) => {
    setOpenCollapse(openCollapse === index ? null : index); // Active ou désactive le collapse
  };

  // Gérer le cas où aucun logement correspondant à l'ID n'est trouvé
  if (!logement) {
    return <p>Logement non trouvé. Veuillez vérifier l'URL.</p>;
  }

  return (
    <div>
      <HeaderLog />
      {/* Slider pour afficher les images du logement */}
      <Slider pictures={logement.pictures} />

   

      {/* Section collapsible pour Description et Equipements */}
      <div className="collapse-section">
        <CollapseLog
          title="Description"
          content={logement.description}
          isOpen={openCollapse === 0}
          toggleCollapse={() => toggleCollapse(0)}
        />
        <CollapseLog
          title="Équipements"
          content={logement.equipments.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          isOpen={openCollapse === 1}
          toggleCollapse={() => toggleCollapse(1)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
