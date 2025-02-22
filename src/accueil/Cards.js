import React from "react";
import "./Accueil.scss"; // Import du fichier SCSS
import data from "../data.json";
import { Link } from "react-router-dom";


const Cards = () => {
  return (
    <div className="cards-container">
      
      {data.map((item) => (
        <Link className="card-link" to={`/logement/${item.id}`} >
        <div  style={{
            backgroundImage: `url(${item.cover})` }} className="cards">
            <div src={item.picture} alt={item.name}/>
          <div className="thumb-title">
            <h1 className="text">{item.title}</h1>
          </div>
        </div>
        </Link>
      ))}
      
      
    </div>
  );
};

export default Cards;
