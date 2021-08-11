import React from 'react';
import StudyCase from 'components/StudyCase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Works = () => {
	return (
	  <div className="container my-5">
      <h1 className="mb-4">Au fil des années, nous avons pu accompagner les meilleurs</h1>
      <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      <Router>
        <nav className="d-flex">
          <Link to="/works/platon-study-case" className="nav-link me-2 ps-0">Platon</Link>
          <Link to="/works/solane-study-case" className="nav-link me-2">Solane</Link>
          <Link to="/works/sedal-study-case" className="nav-link me-2">Sedal</Link>
        </nav>
        <Switch>
          <Route path="/works/:clientSlug">
            <StudyCase />
          </Route>
        </Switch>
      </Router>
    </div>
	);
};

export default Works;