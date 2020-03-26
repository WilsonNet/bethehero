import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
      </Switch>
      <Switch>
        <Route path="/register" component={Register} />
      </Switch>
      <Switch>
        <Route path="/profile" component={Profile} />
      </Switch>
      <Switch>
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
