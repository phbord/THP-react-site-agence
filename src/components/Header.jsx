import React, { useContext, useEffect } from 'react';
import ThemeContext from 'ThemeContext';

const Header = () => {
  const nightmode = useContext(ThemeContext);

  useEffect(() => {
    if (nightmode == true) {
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
          <a href="#" 
              className="navbar-brand d-flex align-items-center">Agence RE</a>
          <button type="button" 
                  className="btn"
                  onClick={switchNight}
                  >Changer de thème</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;