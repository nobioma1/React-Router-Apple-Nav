import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubNav from './Components/SubNav';
import styled from 'styled-components';
import NavWrapper from './Components/NavWrapper';

const Content = styled.div`
  padding-top: 80px;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;

const App = () => {
  return (
    <Router>
      <div className="App" />
      <NavWrapper />
      <Switch>
        <Route exact path="/" component={() => <Content>Home</Content>} />
        <Route path="/support" component={() => <Content>Support</Content>} />
        <Route path="/:product" render={(props) => <SubNav {...props}/>} />
      </Switch>
    </Router>
  );
};

export default App;
