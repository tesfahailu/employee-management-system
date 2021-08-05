import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { AppLayout } from './../layout/AppLayout';

import { ViewAllData as EmployeesViewAll } from '../pages/Employees/ViewAll/ViewAllData';
import { ViewOneData as EmployeesViewOne } from '../pages/Employees/ViewOne/ViewOneData';
import { EditData as EmployeesEdit } from '../pages/Employees/Edit/EditData';
import { CreateData as EmployeesCreate } from '../pages/Employees/Create/CreateData';

import { ViewAllData as ProjectsViewAll } from '../pages/Projects/ViewAll/ViewAllData';
import { ViewOneData as ProjectsViewOne } from '../pages/Projects/ViewOne/ViewOneData';
import { EditData as ProjectsEdit } from '../pages/Projects/Edit/EditData';
import { CreateData as ProjectsCreate } from '../pages/Projects/Create/CreateData';

import { ViewAllData as OfficesViewAll } from '../pages/Offices/ViewAll/ViewAllData';
import { ViewOneData as OfficesViewOne } from '../pages/Offices/ViewOne/ViewOneData';
import { EditData as OfficesEdit } from '../pages/Offices/Edit/EditData';
import { CreateData as OfficesCreate } from '../pages/Offices/Create/CreateData';

import { ViewAllData as DepartmentsViewAll } from '../pages/Departments/ViewAll/ViewAllData';
import { ViewOneData as DepartmentsViewOne } from '../pages/Departments/ViewOne/ViewOneData';
import { EditData as DepartmentsEdit } from '../pages/Departments/Edit/EditData';
import { CreateData as DepartmentsCreate } from '../pages/Departments/Create/CreateData';

import { ViewAllData as RolesViewAll } from '../pages/Roles/ViewAll/ViewAllData';
import { ViewOneData as RolesViewOne } from '../pages/Roles/ViewOne/ViewOneData';
import { EditData as RolesEdit } from '../pages/Roles/Edit/EditData';
import { CreateData as RolesCreate } from '../pages/Roles/Create/CreateData';
import { SettingsData as Settings } from '../pages/Settings/SettingsData';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';

export const PageRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/employees" component={EmployeesViewAll} />
    <Route
      path={['/employees/edit/:id', '/employees/viewOne/edit/:id']}
      component={EmployeesEdit}
    />
    <Route path="/employees/create" component={EmployeesCreate} />
    <Route path="/employees/viewOne/:id" component={EmployeesViewOne} />

    <Route exact path="/projects" component={ProjectsViewAll} />
    <Route path="/projects/viewOne/:id" component={ProjectsViewOne} />
    <Route path="/projects/edit/:id" component={ProjectsEdit} />
    <Route path="/projects/create" component={ProjectsCreate} />

    <Route exact path="/offices" component={OfficesViewAll} />
    <Route path="/offices/viewOne/:id" component={OfficesViewOne} />
    <Route path="/offices/edit/:id" component={OfficesEdit} />
    <Route path="/offices/create" component={OfficesCreate} />

    <Route exact path="/departments" component={DepartmentsViewAll} />
    <Route
      exact
      path="/departments/viewOne/:id"
      component={DepartmentsViewOne}
    />
    <Route exact path="/departments/edit/:id" component={DepartmentsEdit} />
    <Route exact path="/departments/create" component={DepartmentsCreate} />

    <Route exact path="/roles" component={RolesViewAll} />
    <Route exact path="/roles/viewOne/:id" component={RolesViewOne} />
    <Route exact path="/roles/edit/:id" component={RolesEdit} />
    <Route exact path="/roles/create" component={RolesCreate} />

    <Route exact path="/settings" component={Settings} />
  </Switch>
);

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
