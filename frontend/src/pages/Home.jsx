import React from 'react';
import logo from '../assets/logo-completo.png'
import logo1 from '../assets/logo-white.png'
import logo2 from '../assets/logo-black.png'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='home-banner'>
      <div className='home-title'>
        <h2 style={{ textTransform: 'uppercase' }}>Benvenuto in Commander Forge</h2>
        <p>Gestisci i tuoi mazzi! Cerca le carte ed aggiungile al tuo deck!</p>
      </div>
      <img src={logo1} alt="Commander Forge Logo" className='home-logo' />
    </div>
    </>
  );
};

export default Home;
