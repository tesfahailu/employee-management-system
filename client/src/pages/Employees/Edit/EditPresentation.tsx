import { Button, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { EditEmployeePageText } from '../../../text';
import { EditEmployeeType } from '../../../types/types';
import { DepartmentCard } from '../../../modules/components/DepartmentCard';
import { EmployeeAddressCard } from '../../../modules/components/EmployeeAddressCard';
import { EmployeeInfoCard } from '../../../modules/components/EmployeeInfoCard';
import { OfficeAddressCard } from '../../../modules/components/OfficeAddressCard';
import { ProjectsCard } from '../../../modules/components/ProjectsCard';

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
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.header}>
          {EditEmployeePageText.PageHeaderText}
        </Typography>
        <Button
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
      <ProjectsCard projects={projects} onProjectChange={onProjectChange} />
    </Fragment>
  );
};
