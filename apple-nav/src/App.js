import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SubNav from './Components/SubNav';
import NavWrapper from './Components/NavWrapper';

const App = () => {
  return (
    <Router>
      <div className="App" />
      <NavWrapper />
      <Route path="/:product" component={SubNav} />
    </Router>
  );
};

export default App;
