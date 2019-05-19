import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tools from '../Tools/Tools';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Tools} />
      </Switch>
    </Router>
  );
};

export default App;
