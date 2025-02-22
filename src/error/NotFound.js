import React from 'react';
import "../error/Error.scss";
import { Link } from 'react-router-dom';
import Footer from "../headerfooter/Footer"


const NotFound = () => {
  return (
    <div>
  <div class="container-error">
    <div className='error404'>
      <h1 class="error">404</h1> 
    </div>
    <div>
      <p className='page'>Oups! La page que vous demandez n'existe pas.</p>
    </div>

  <div className='accueilpage'>
  <Link to="/" className='returnaccueil'>Retourner sur la page d’accueil</Link>
  </div>

  </div>
  <Footer/>

    </div>
  )
}

export default NotFound