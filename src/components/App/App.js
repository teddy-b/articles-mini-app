import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import ErrorBoundary from '../shared/ErrorBoundary';
import ConnectedHome from '../../containers/ConnectedHome';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route path="/" exact component={ConnectedHome} />
        <Route path="/article/:id" component={ConnectedHome} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </ErrorBoundary>
);

export default App;
