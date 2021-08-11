import React, { useState, useContext } from 'react';
import ThemeContext from 'ThemeContext';

const Header = () => {
  const classApp = useContext(ThemeContext)

  return (
    <header>
      <nav className="navbar shadow-sm">
        <div className="container">
          <a href="#" 
              className="navbar-brand d-flex align-items-center">Agence RE</a>
          <button type="button" 
                  className="btn">Changer de thème</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;