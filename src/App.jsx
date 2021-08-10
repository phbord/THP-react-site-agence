import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap';

import ThemeContext from 'ThemeContext';
import Header from 'components/Header';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

function App() {
  const [currentTheme, setCurrentTheme] = useState(true)

  return (<>
    <ThemeContext.Provider value="">
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  </>);
}

export default App;
