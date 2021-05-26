import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { AppLayout } from './../layout/AppLayout';
import { User } from '../pages/User';
import { Projects } from '../pages/Projects';
import { Offices } from '../pages/Offices';
import { Settings } from '../pages/Settings';
import { Departments } from '../pages/Departments';
import { Roles } from '../pages/Roles';
import { useMediaQuery } from '@material-ui/core';
import { ViewAllData as EmployeesViewAll } from '../pages/Employees/ViewAll/ViewAllData';
import { ViewOneData as EmployeesViewOne } from '../pages/Employees/ViewOne/ViewOneData';
import { EditData as EmployeesEdit } from '../pages/Employees/Edit/EditData';
import { CreateData as EmployeesCreate } from '../pages/Employees/Create/CreateData';

export const PageRoutes: React.FC = () => {
  const isAboveMinWidth = useMediaQuery('(min-width:1200px)');
  return (
    <Switch>
      <Route exact path="/user" component={User} />
      <Route
        exact
        path="/employees/viewAll"
        render={(props) => (
          <EmployeesViewAll {...props} isAboveMinWidth={isAboveMinWidth} />
        )}
      />
      <Route path="/employees/viewOne/:id" component={EmployeesViewOne} />
      <Route path="/employees/edit/:id" component={EmployeesEdit} />
      <Route path="/employees/create" component={EmployeesCreate} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/offices" component={Offices} />
      <Route exact path="/departments" component={Departments} />
      <Route exact path="/roles" component={Roles} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
};

export const GeneralRoutes = () => {
  const drawerWidth = 200;
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
