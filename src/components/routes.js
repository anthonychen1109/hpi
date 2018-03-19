import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import App from '../containers/app';
import Render from '../containers/render';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/render" component={Render} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
