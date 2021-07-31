import { Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { CreateEmployeePageText } from '../../../text';
import { CreateEmployeeType } from '../../../types/types';
import { DepartmentCard } from '../../../modules/components/DepartmentCard';
import { EmployeeAddressCard } from '../../../modules/components/EmployeeAddressCard';
import { EmployeeInfoCard } from '../../../modules/components/EmployeeInfoCard';
import { OfficeAddressCard } from '../../../modules/components/OfficeAddressCard';
import { ProjectsCard } from '../../../modules/components/ProjectsCard';

export const CreatePresentation: React.FC<CreateEmployeeType> = ({
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
}) => {
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
