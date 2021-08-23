import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppLayout } from './../layout/AppLayout';

import { ViewAll as EmployeesViewAll } from '../pages/Employees/ViewAll';
import { ViewOne as EmployeesViewOne } from '../pages/Employees/ViewOne';
import { Edit as EmployeesEdit } from '../pages/Employees/Edit';
import { Create as EmployeesCreate } from '../pages/Employees/Create';

import { ViewAllData as ProjectsViewAll } from '../pages/Projects/ViewAll/ViewAllData';
import { ViewOneData as ProjectsViewOne } from '../pages/Projects/ViewOne/ViewOneData';
import { EditData as ProjectsEdit } from '../pages/Projects/Edit/EditData';
import { CreateData as ProjectsCreate } from '../pages/Projects/Create/CreateData';

import { ViewAll as OfficesViewAll } from '../pages/Offices/ViewAll';
import { ViewOne as OfficesViewOne } from '../pages/Offices/ViewOne';
import { Edit as OfficesEdit } from '../pages/Offices/Edit';
import { Create as OfficesCreate } from '../pages/Offices/Create';

import { ViewAll as DepartmentsViewAll } from '../pages/Departments/ViewAll';
import { ViewOne as DepartmentsViewOne } from '../pages/Departments/ViewOne';
import { Edit as DepartmentsEdit } from '../pages/Departments/Edit';
import { Create as DepartmentsCreate } from '../pages/Departments/Create';

import { ViewAll as RolesViewAll } from '../pages/Roles/ViewAll';
import { ViewOne as RolesViewOne } from '../pages/Roles/ViewOne';
import { Edit as RolesEdit } from '../pages/Roles/Edit';
import { Create as RolesCreate } from '../pages/Roles/Create';

import { SettingsData as Settings } from '../pages/Settings/SettingsData';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';

export const PageRoutes = () => (
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
    <Route path="/departments/viewOne/:id" component={DepartmentsViewOne} />
    <Route path="/departments/edit/:id" component={DepartmentsEdit} />
    <Route path="/departments/create" component={DepartmentsCreate} />

    <Route exact path="/roles" component={RolesViewAll} />
    <Route path="/roles/viewOne/:id" component={RolesViewOne} />
    <Route path="/roles/edit/:id" component={RolesEdit} />
    <Route path="/roles/create" component={RolesCreate} />

    <Route exact path="/settings" component={Settings} />
    <Route path="/">
      <Redirect to="/employees" />
    </Route>
  </Switch>
);

export const Routes = () => (
  <Switch>
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Switch>
      <AppLayout>
        <PageRoutes />
      </AppLayout>
    </Switch>
  </Switch>
);
