import React from "react";
import "../headerfooter/Headerfooter.scss";
import logo from "../photo/LOGO.png";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      {/* Header avec logo et navigation */}
      <header className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo Kasa" />
        </div>
        <nav className="nav">
          <Link className="nav-link link2" to="/">Accueil</Link>
          <Link className="nav-link " to="/apropos">À propos</Link>
        </nav>
      </header>

  





    </div>
  );
};

export default Header;
