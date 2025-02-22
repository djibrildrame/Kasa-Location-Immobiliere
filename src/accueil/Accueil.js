import React from "react";
import Header from "../headerfooter/Header.js";
import "../accueil/Accueil.scss";
import montagne from "../photo/IMG.png";
import Cards from "../accueil/Cards.js";
import Footer from "../headerfooter/Footer.js"

const Accueil = () => {
  return (
    <div>
      <Header/>

  {/* Conteneur principal */}
  <div className="container">
        <div className="image-container">
          <img src={montagne} alt="montagne" className="montagne" />
        </div>

        <div className="container-items">

          <Cards/>
        </div>

        <Footer/>


      </div>









    </div>
  );
};

export default Accueil;
