import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from 'ThemeContext';

const Header = () => {
  const nightmode = useContext(ThemeContext);

  useEffect(() => {
    if (nightmode.currentTheme) {
      nightmode.getNight('App');
    };
  }, []);

  const switchNight = () => {
    nightmode.toggleNight();
    nightmode.getNight('App');
  }

  return (
    <header className="header">
      <nav className="navbar shadow-sm">
        <div className="container">
          <div className="d-flex">
            <Link to="/" 
                  className="navbar-brand d-flex align-items-center">Agence RE</Link>
            <ul className="d-flex align-items-center">
              <li className="mx-2">
                <Link to="/" className="navbar-brand">Accueil</Link>
              </li>
              <li className="me-2">
                <Link to="/about" className="navbar-brand">A propos</Link>
              </li>
              <li className="me-2">
                <Link to="/works" className="navbar-brand">Travaux</Link>
              </li>
            </ul>
          </div>
          <button type="button" 
                  className="btn"
                  onClick={switchNight}>Changer de thème</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;