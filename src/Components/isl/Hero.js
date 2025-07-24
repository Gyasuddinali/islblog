// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div
      className="text-white text-center py-5 px-3 position-relative"
      style={{
        backgroundImage: "url('https://al-islam.org/sites/all/themes/al_islam_bootstrap/images/book-pile.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '300px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
        <h1 className="display-5 fw-bold">Access 3,000+ Resources about Islam and Muslims</h1>
        <p className="lead mt-3">
          Discover books, articles, and multimedia to deepen your knowledge of Islam.
        </p>
        <Link to="/categories" className="btn btn-light mt-3">
          Browse Categories
        </Link>
      </div>
    </div>
  );
}

export default Hero;
