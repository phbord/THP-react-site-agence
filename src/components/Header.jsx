import React, { useState, useContext } from 'react';
import ThemeContext from 'ThemeContext';

const Header = () => {
  const nightmode = useContext(ThemeContext);
  const [night, setNight] = useState(false);

  const switchNight = () => {
    nightmode.toggleNight(night);
    nightmode.getNight('App');
    setNight(!night)
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