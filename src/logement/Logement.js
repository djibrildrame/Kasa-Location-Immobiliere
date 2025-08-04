import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import HeaderLog from "../headerfooter/HeaderLog";
import "../logement/Logement.scss";
import Slider from "./Slider";
import CollapseLog from "./CollapseLog";
import data from "../data.json";
import Footer from "../logement/FooterLog";

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  const [openCollapse, setOpenCollapse] = useState(null);

  // ✅ Si le logement n'existe pas, redirige immédiatement
  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  const toggleCollapse = (index) => {
    setOpenCollapse(openCollapse === index ? null : index);
  };

  return (
    <div>
      <HeaderLog />
      <Slider pictures={logement.pictures} />
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