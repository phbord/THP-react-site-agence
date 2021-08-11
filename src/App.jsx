import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap';

import ThemeContext from 'ThemeContext';
import Header from 'components/Header';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

function App() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.nightmode === "true" || false);

  useEffect(() => {
    localStorage.setItem("nightmode", currentTheme);
  }, [currentTheme]);

  return (<>
    <ThemeContext.Provider value={{
      currentTheme,
      toggleNight: () => setCurrentTheme(!currentTheme),
      getNight: (obj) => document.getElementsByClassName(obj)[0].classList.toggle('night-mode')
    }}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  </>);
}

export default App;
