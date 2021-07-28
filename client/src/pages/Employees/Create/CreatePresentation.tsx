import { Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { CreateEmployeePageText } from '../../../text';
import { CreateEmployeeType } from '../../../types/types';
import { DepartmentCard } from '../components/DepartmentCard';
import { EmployeeAddressCard } from '../components/EmployeeAddressCard';
import { EmployeeInfoCard } from '../components/EmployeeInfoCard';
import { OfficeAddressCard } from '../components/OfficeAddressCard';
import { ProjectsCard } from '../components/ProjectsCard';

export const CreatePresentation = ({
  employee,
  onEmployeeInfoChange,
  department,
  onDepartmentChange,
  employeeAddress,
  onEmployeeAddressChange,
  officeAddress,
  onOfficeAddressChange,
  projects,
  onProjectChange,
  isFormComplete,
  saveChanges,
}: CreateEmployeeType) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={classes.header}>
        {CreateEmployeePageText.PageHeaderText}
      </Typography>
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
      <Button
        color="primary"
        variant="contained"
        className={classes.actionButtonSpacing}
        disabled={!isFormComplete}
        onClick={saveChanges}
      >
        {CreateEmployeePageText.SaveButtonText}
      </Button>
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
