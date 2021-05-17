import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EmployeesView } from '../pages/EmployeesView';
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
import { EmployeeView } from '../pages/EmployeeView/employeeViewData';
import { EmployeeInfoData } from '../pages/EmployeeEdit/EmployeeInfoData';

export const PageRoutes: React.FC = () => {
  const isAboveMinWidth = useMediaQuery('(min-width:1000px)');
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/user" component={User} />
      <Route
        exact
        path="/employees/view"
        render={(props) => (
          <EmployeesView {...props} isAboveMinWidth={isAboveMinWidth} />
        )}
      />
      <Route path="/employee/view/:id" component={EmployeeView} />
      <Route
        path="/employee/edit/:id/employeeInfo"
        component={EmployeeInfoData}
      />
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
