import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditEmployeePageText } from '../../../text';
import { EditEmployeeType } from '../../../types/types';
import { DepartmentCard } from './components/DepartmentCard';
import { EmployeeAddressCard } from './components/EmployeeAddressCard';
import { EmployeeInfoCard } from './components/EmployeeInfoCard';
import { OfficeAddressCard } from './components/OfficeAddressCard';
import { ProjectsPresentation } from './components/ProjectsPresentation';

export const EditPresentation = ({
  employee,
  onEmployeeInfoChange,
  employeeAddress,
  onEmployeeAddressChange,
  department,
  onDepartmentChange,
  officeAddress,
  onOfficeAddressChange,
  projects,
  onProjectChange,
  isFormChanged,
  saveChanges,
}: EditEmployeeType) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container justify="space-between">
        <Typography variant="h5" className={classes.header}>
          {EditEmployeePageText.PageHeaderText}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          className={classes.actionButtonSpacing}
          disabled={!isFormChanged}
          onClick={saveChanges}
        >
          {EditEmployeePageText.SaveButtonText}
        </Button>
      </Grid>
      <EmployeeInfoCard
        employee={employee}
        onEmployeeInfoChange={onEmployeeInfoChange}
      />
      <DepartmentCard
        department={department}
        onDepartmentChange={onDepartmentChange}
      />
      <EmployeeAddressCard
        address={employeeAddress}
        onAddressChange={onEmployeeAddressChange}
      />
      <OfficeAddressCard
        address={officeAddress}
        onAddressChange={onOfficeAddressChange}
      />
      <ProjectsPresentation
        projects={projects}
        onProjectChange={onProjectChange}
      />
    </Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(2),
    },
    actionButtonSpacing: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);
