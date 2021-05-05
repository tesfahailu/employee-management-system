import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Bye } from '../pages/Bye';
import { Header } from '../Header';
import { AppLayout } from './../layout/AppLayout';

export const PageRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bye" component={Bye} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export const GeneralRoutes = () => {
  const drawerWidth = 300;
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Switch>
        <AppLayout drawerWidth={drawerWidth}>
          <PageRoutes />
        </AppLayout>
      </Switch>
    </Switch>
  );
};
