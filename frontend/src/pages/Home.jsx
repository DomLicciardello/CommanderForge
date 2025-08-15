import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-completo.png'
import logo1 from '../assets/logo-white.png'
import logo2 from '../assets/logo-black.png'
import './Home.css'

const Home = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='home-banner'>
        <div className={`home-title ${showElements ? 'animate-slide-down' : ''}`}>
          <h2 style={{ textTransform: 'uppercase' }}>Benvenuto in Commander Forge</h2>
          <p>Gestisci i tuoi mazzi! Cerca le carte ed aggiungile al tuo deck!</p>
        </div>
        <img 
          src={logo1} 
          alt="Commander Forge Logo" 
          className={`home-logo ${showElements ? 'animate-slide-up' : ''}`} 
        />
      </div>
    </>
  );
};

export default Home;